import React from 'react';

export default function Contact() {
  return (
    <div className="pointer-events-auto w-full max-w-5xl flex flex-col">
      <div className="mb-12">
        <h3 className="text-white text-4xl lg:text-6xl font-extralight mb-6">Let's Connect</h3>
        <p className="text-zinc-500 text-lg leading-relaxed max-w-[500px]">
          Let's build something together. Reach out via email or social channels.
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-2">
          <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500">Email</span>
          <a 
            href="mailto:annawang9909@gmail.com" 
            className="text-2xl lg:text-4xl font-extralight text-white hover:text-emerald-500 transition-colors"
          >
            annawang9909@gmail.com
          </a>
        </div>

        {/* <div className="space-y-2">
          <span className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500">Social</span>
          <div className="flex flex-col gap-3">
            <a 
              href="https://github.com/annaw-99" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl lg:text-2xl font-extralight text-white hover:text-emerald-500 transition-colors"
            >
              Github →
            </a>
            <a 
              href="https://www.linkedin.com/in/tungyen-wang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl lg:text-2xl font-extralight text-white hover:text-emerald-500 transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}