import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Github, Instagram, Linkedin, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnnkzpjl';

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Unable to submit');
      setStatusMessage('Thank you — your message made it through. ♡');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatusError('Something went wrong. Please try again, or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="paper-page inner-page contact-page">
      <section className="page-width contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">Let’s connect</span>
          <h1>Let’s create something meaningful.</h1>
          <p className="handwritten contact-handwriting">Have a project in mind, a studio looking for someone, or just want to say hi?</p>
          <p>I’d love to hear from you. I’m open to game industry opportunities, collaborations and interesting creative work.</p>

          <div className="contact-details">
            <a href="mailto:avelloxstudio@gmail.com"><Mail size={18} /> avelloxstudio@gmail.com</a>
            <span><MapPin size={18} /> Sarajevo, Bosnia & Herzegovina</span>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/EdinaKurto" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href="https://www.linkedin.com/in/edina-kurto-70093230b/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a href="https://www.instagram.com/avelloxy/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a>
          </div>

          <div className="availability-line"><span /> Open to game industry opportunities</div>
        </div>

        <div className="contact-form-scene">
          <form className="paper-form" onSubmit={handleSubmit}>
            <span className="tape tape-top" aria-hidden="true" />
            <label>
              <span>Your name</span>
              <input name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              <span>Your email</span>
              <input name="email" type="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              <span>Your message</span>
              <textarea name="message" rows={7} value={formData.message} onChange={handleChange} required />
            </label>

            {(statusMessage || statusError) && (
              <p className={statusError ? 'form-status error' : 'form-status'}>{statusError || statusMessage}</p>
            )}

            <button className="story-button primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'} <Send size={16} />
            </button>
          </form>

          <div className="contact-postcard handwritten">from Sarajevo,<br/>with too many sketches ♡</div>
          <div className="contact-envelope" aria-hidden="true"><span>A</span></div>
        </div>
      </section>
    </div>
  );
}
