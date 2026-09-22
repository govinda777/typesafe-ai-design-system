import React from 'react';
import { Code, MessageCircle, Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-12 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-slate-500">
          © {new Date().getFullYear()} typesafe.ai
        </div>

        <div className="flex items-center gap-6 text-slate-500">
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2 font-mono text-sm">
            <Code size={16} />
            <span>GitHub</span>
          </a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2 font-mono text-sm">
            <MessageCircle size={16} />
            <span>X</span>
          </a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2 font-mono text-sm">
            <Activity size={16} />
            <span>Status</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
