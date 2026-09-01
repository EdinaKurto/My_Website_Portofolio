import { Github, Instagram, Linkedin, Mail, Sprout } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-decoration footer-decoration--left">❋</div>
      <div className="footer-decoration footer-decoration--right">❋</div>

      <div className="container footer-grid">
        <p className="handwritten footer-note">Thank you for stopping by. ♡</p>

        <div className="footer-brand">
          <Sprout size={20} strokeWidth={1.4} />
          <h2>Avellox Studio</h2>
          <p className="handwritten">Stories. Worlds. Memories.</p>
        </div>

        <div className="footer-social">
          <a href="https://github.com/EdinaKurto" target="_blank" rel="noreferrer">
            <Github size={15} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/edina-kurto-70093230b/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <a href="https://www.instagram.com/avelloxy/" target="_blank" rel="noreferrer">
            <Instagram size={15} /> Instagram
          </a>
          <a href="mailto:avelloxstudio@gmail.com">
            <Mail size={15} /> Email
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Avellox Studio</span>
        <span>Made with care in Sarajevo.</span>
      </div>
    </footer>
  );
}
