import { Github, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';
export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/EdinaKurto', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/edina-kurto-70093230b/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/avelloxy/', label: 'Instagram' },
  ];
  return (
    <footer className="bg-[#0D1018] border-t border-[#C5A9FF]/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3A6FF7] to-[#C5A9FF] flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold">Avellox </span>
            </div>
            <p className="text-white/50 text-sm flex items-center gap-1">© 2025 Avellox. Made with <Heart size={14} className="text-[#FFC7A8] fill-[#FFC7A8]" /></p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-[#1a1d29] border border-[#C5A9FF]/20 flex items-center justify-center text-white/70 hover:text-[#C5A9FF] hover:border-[#C5A9FF] hover:glow-warm transition-all duration-300 hover:scale-110">
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 text-white/40 text-sm">Crafting cozy interactive worlds & visual stories </div>
      </div>
    </footer>
  );
}