"use client";
import { Mail, Calendar, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="mb-24 transition-all duration-1000 delay-200 opacity-0 animate-fadeInUp">
      <div className="flex items-start gap-6 mb-8">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/20">
          👨‍💻
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Hey, I'm Your Name
          </h1>
          <p className="text-xl text-slate-400 mb-4">
            Senior Full Stack Developer based in Morocco 🇲🇦
          </p>
          <p className="text-slate-300 max-w-2xl leading-relaxed">
            Building exceptional digital experiences with modern technologies. 
            If you need a passionate developer ready to bring your ideas to life, let's connect.
          </p>
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex gap-4 flex-wrap">
        <button className="group px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105">
          <Calendar className="w-5 h-5" />
          Book a Call
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-100 font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 border border-slate-700/50 hover:border-slate-600 backdrop-blur-sm">
          <Mail className="w-5 h-5" />
          Send Email
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-emerald-400 font-medium">Available for hire, let's talk!</span>
      </div>
    </section>
  );
}
