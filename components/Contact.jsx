"use client";

export default function Contact() {
  return (
    <section className="transition-all duration-1000 delay-800 opacity-0 animate-fadeInUp">
      <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Get In Touch</h2>
      <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
        <p className="text-slate-300 mb-6 leading-relaxed">
          You can reach me anytime at{' '}
          <a 
            href="mailto:your.email@example.com" 
            className="text-emerald-400 hover:text-emerald-300 font-semibold underline decoration-emerald-400/30 hover:decoration-emerald-400 transition-colors"
          >
            your.email@example.com
          </a>
        </p>
        <p className="text-slate-400">
          Or book a call on{' '}
          <a 
            href="https://cal.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-semibold underline decoration-cyan-400/30 hover:decoration-cyan-400 transition-colors"
          >
            Cal.com
          </a>
        </p>
      </div>
    </section>
  );
}
