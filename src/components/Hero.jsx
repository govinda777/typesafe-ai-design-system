import React from 'react';
import { Copy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col items-center text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
        Decisions, not text.
      </h1>

      <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 leading-relaxed">
        A System One AI model that outputs typed values and probabilities instead of tokens. Built for deterministic developer experiences.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button className="font-mono text-sm bg-white text-black px-6 py-3 hover:bg-slate-200 transition-colors h-12 flex items-center justify-center min-w-[160px]">
          Read the Docs
        </button>

        <div className="group flex items-center border border-white/20 bg-black h-12 px-4 hover:border-white/40 transition-colors cursor-text">
          <span className="font-mono text-sm text-slate-400 mr-4 select-all">
            npm install @typesafe/sdk
          </span>
          <button className="text-slate-500 group-hover:text-white transition-colors" title="Copy to clipboard">
            <Copy size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
