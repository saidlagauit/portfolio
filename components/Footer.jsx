"use client";
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
      <p>© 2025 Built with ❤️ by Your Name</p>
      <a
        href="https://github.com/yourusername/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-emerald-400 transition-colors flex items-center gap-2"
      >
        This website is open source
        <ExternalLink className="w-4 h-4" />
      </a>
    </footer>
  );
}
