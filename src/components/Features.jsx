import React from 'react';
import { Type, Zap, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Type size={24} className="text-white mb-6" />,
      title: "Zero Type Errors",
      description: "Stop parsing strings. Get guaranteed JSON outputs that strictly conform to your Zod or JSON schemas out-of-the-box."
    },
    {
      icon: <Zap size={24} className="text-white mb-6" />,
      title: "100x Faster",
      description: "Optimized inference engine bypassing standard autoregressive generation for deterministic binary and categorical choices."
    },
    {
      icon: <ShieldCheck size={24} className="text-white mb-6" />,
      title: "Calibrated Confidence",
      description: "Receive true probability scores for every decision, allowing you to set rigorous thresholds for automated actions."
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-start border-t border-white/10 pt-6">
            {feature.icon}
            <h3 className="font-mono text-lg text-white mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
