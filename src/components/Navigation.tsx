import { Menu, Sprout, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Artwork", to: "/artwork" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const active = (to: string) =>
    to === "/projects"
      ? location.pathname.startsWith("/projects")
      : location.pathname === to;

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="site-nav__inner">
        <Link className="site-brand" to="/">
          <Sprout size={15} strokeWidth={1.5} />
          <span>Avellox</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((item) => (
            <Link
              className={active(item.to) ? "is-active" : ""}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
          <span className="sun-mark" aria-hidden="true">☼</span>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((item) => (
            <Link
              className={active(item.to) ? "is-active" : ""}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
