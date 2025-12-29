"use client";

import { PropsWithChildren, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollSectionProps = PropsWithChildren<{
  className?: string;
}>;

export default function ScrollSection({ children, className }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // progress goes 0->1 as this section moves through the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax + subtle scale
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className={["min-h-screen relative", className].filter(Boolean).join(" ")}>
      <motion.div
        style={{ y, scale, opacity }}
        initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ amount: 0.35, once: false }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
