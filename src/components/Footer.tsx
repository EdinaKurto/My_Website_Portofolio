import { Github, Linkedin, Instagram, Sprout } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/EdinaKurto', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/edina-kurto-70093230b/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/avelloxy/', label: 'Instagram' },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-sketch footer-sketch-left" aria-hidden="true">✦ 〰 ✿</div>
      <div className="footer-inner">
        <p className="handwritten footer-note">Thank you for stopping by. ♡</p>

        <div className="footer-brand">
          <Sprout size={22} strokeWidth={1.4} />
          <strong>Avellox Studio</strong>
          <span className="handwritten">Stories. Worlds. Memories.</span>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  <Icon size={17} strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
          <small>© 2026 Avellox Studio</small>
        </div>
      </div>
    </footer>
  );
}
