import React from 'react';

export default function TerminalBlock() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden">
        {/* Left Pane - Input */}
        <div className="bg-black p-6 flex flex-col h-full min-w-0">
          <div className="flex items-center gap-2 mb-6 opacity-50">
            <div className="w-2.5 h-2.5 bg-slate-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-slate-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-slate-400 rounded-full"></div>
            <span className="font-mono text-xs ml-2 uppercase tracking-widest text-slate-400">Input (State & Schema)</span>
          </div>

          <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-slate-300 whitespace-pre">
            <code>
<span className="text-blue-400">const</span> schema = z.<span className="text-blue-200">object</span>({'{'}
  action: z.<span className="text-blue-200">enum</span>([<span className="text-green-400">'ALLOW'</span>, <span className="text-green-400">'DENY'</span>]),
  reason: z.<span className="text-blue-200">string</span>(),
  confidence: z.<span className="text-blue-200">number</span>().<span className="text-blue-200">min</span>(0).<span className="text-blue-200">max</span>(1)
{'}'});

<span className="text-blue-400">const</span> result = <span className="text-blue-400">await</span> ai.<span className="text-blue-200">evaluate</span>({'{'}
  schema,
  state: {'{'}
    user_id: <span className="text-green-400">"usr_123"</span>,
    intent: <span className="text-green-400">"delete_database"</span>,
    role: <span className="text-green-400">"viewer"</span>
  {'}'}
{'}'});
            </code>
          </pre>
        </div>

        {/* Right Pane - Output */}
        <div className="bg-zinc-950 p-6 flex flex-col h-full border-l border-white/10 min-w-0">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 opacity-50">Output (Typed Decision)</span>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-emerald-500">24ms</span>
            </div>
          </div>

          <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-slate-300 whitespace-pre">
            <code>
{'{'}
  <span className="text-blue-300">"action"</span>: <span className="text-emerald-400">"DENY"</span>,
  <span className="text-blue-300">"reason"</span>: <span className="text-green-400">"User 'viewer' lacks permissions for intent 'delete_database'"</span>,
  <span className="text-blue-300">"confidence"</span>: <span className="text-orange-300">0.998</span>
{'}'}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
