import { FormEvent, useState } from "react";
import { Github, Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { BotanicalSprig, MountainSketch, Tape } from "../components/Decor";
import { hero } from "../data/siteData";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnnkzpjl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="inner-page contact-page">
      <section className="contact-section">
        <BotanicalSprig className="contact-sprig" />

        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="handwritten section-hand">let&apos;s connect</p>
            <h1>
              Let&apos;s create
              <br />
              something meaningful.
            </h1>

            <p className="handwritten contact-hand">
              Have a project in mind, a studio looking for someone, or just want
              to say hi? I&apos;d love to hear from you.
            </p>

            <div className="contact-links">
              <a href="mailto:avelloxstudio@gmail.com">
                <Mail size={17} /> avelloxstudio@gmail.com
              <span>
                <MapPin size={17} /> Sarajevo, Bosnia & Herzegovina
              </span>
              <a href="https://github.com/EdinaKurto" target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/edina-kurto-70093230b/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
              <a href="https://www.instagram.com/avelloxy/" target="_blank" rel="noreferrer">
                <Instagram size={17} /> Instagram
              </a>
            </div>

            <div className="availability">
              <span />
              Open to game industry opportunities
            </div>
          </div>

          <div className="contact-board">
            <form className="contact-form-paper" onSubmit={submit}>
              <Tape />
              <label>
                Your name
                <input name="name" required />
              </label>
              <label>
                Your email
                <input name="email" type="email" required />
              </label>
              <label>
                Your message
                <textarea name="message" rows={7} required />
              </label>

              <button className="button button--primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={14} />
              </button>

              {status === "sent" && (
                <p className="form-status">Message sent — thank you. ♡</p>
              )}
              {status === "error" && (
                <p className="form-status form-status--error">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            <div className="contact-polaroid">
              <Tape />
              <img src={hero} alt="Balkan mountain landscape" />
              <span className="handwritten">somewhere worth remembering</span>
            </div>

            <div className="envelope">
              <span className="wax">A</span>
            </div>

            <MountainSketch className="contact-mountains" />
          </div>
        </div>
      </section>
    </div>
  );
}
