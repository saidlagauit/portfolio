"use client";
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/yourusername" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/yourusername" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/yourusername" }
];

export default function SocialLinks() {
  return (
    <section className="mb-24 transition-all duration-1000 delay-600 opacity-0 animate-fadeInUp">
      <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Find Me On</h2>
      <p className="text-slate-400 mb-6">You can find me on the following social platforms:</p>
      
      <div className="flex gap-4 flex-wrap">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-5 py-3 bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/50 hover:border-slate-600 rounded-xl transition-all duration-300 backdrop-blur-sm hover:scale-105"
          >
            <social.icon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            <span className="font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
