import React from 'react';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 bg-zinc-950/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-3 cursor-pointer">
        <Terminal size={20} className="text-white" />
        <span className="font-mono font-bold text-white tracking-tight">typesafe.ai</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-mono text-sm text-slate-400">
        <a href="#" className="hover:text-white transition-colors">Docs</a>
        <a href="#" className="hover:text-white transition-colors">Models</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
      </div>

      <button className="font-mono text-sm bg-white text-black px-4 py-2 hover:bg-slate-200 transition-colors">
        Get API Key
      </button>
    </nav>
  );
}
