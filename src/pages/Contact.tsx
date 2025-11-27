import { useState } from 'react';
import { CustomButton } from '../components/CustomButton';
import { Mail, MessageSquare, User, Send, Sparkles, Heart } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusError, setStatusError] = useState<string | null>(null);

  // replace this with your real Formspree endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnnkzpjl';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatusMessage("Thank you for your message! I'll get back to you soon. ✨");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusError('Something went wrong. Please try again in a moment.');
      }
    } catch (err) {
      console.error(err);
      setStatusError('Unable to send right now. Please check your internet and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-24 px-6 relative overflow-hidden film-grain">
      {/* Background Illustration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-[#C5A9FF] animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full border border-[#FFC7A8] animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-radial-warm"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A9FF]/10 border border-[#C5A9FF]/30 rounded-full mb-6">
            <Sparkles className="text-[#FFC7A8]" size={16} />
            <span className="text-white/90 text-sm">Let's connect</span>
          </div>

          <h1 className="text-5xl md:text-6xl text-white mb-4">
            Let&apos;s Make Something Together
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Share your idea, project, or just say hi. I&apos;d love to hear from you!
          </p>
        </div>

        {/* Contact Form */}
        <div className="card-warm backdrop-blur-sm p-8 md:p-12 border border-[#C5A9FF]/30 glow-warm relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-white/80 mb-2"
              >
                <User size={18} className="text-[#C5A9FF]" />
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="What should I call you?"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-[#1a1d29]/80 border-[#C5A9FF]/30 focus:border-[#C5A9FF] focus:ring-[#C5A9FF]/50 text-white placeholder:text-white/40 h-12 rounded-xl"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-white/80 mb-2"
              >
                <Mail size={18} className="text-[#3A6FF7]" />
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#1a1d29]/80 border-[#3A6FF7]/30 focus:border-[#3A6FF7] focus:ring-[#3A6FF7]/50 text-white placeholder:text-white/40 h-12 rounded-xl"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-white/80 mb-2"
              >
                <MessageSquare size={18} className="text-[#FFC7A8]" />
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your idea, project, or just say hello..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-[#1a1d29]/80 border-[#FFC7A8]/30 focus:border-[#FFC7A8] focus:ring-[#FFC7A8]/50 text-white placeholder:text-white/40 resize-none rounded-xl"
              />
            </div>

            {/* Status message */}
            {(statusMessage || statusError) && (
              <p
                className={`text-sm ${
                  statusError ? 'text-red-400' : 'text-emerald-400'
                }`}
              >
                {statusMessage || statusError}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <CustomButton
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </CustomButton>
            </div>
          </form>

          {/* Decorative sparkles on form */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-[#C5A9FF] rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#FFC7A8] rounded-full animate-pulse"
            style={{ animationDelay: '0.5s' }}
          ></div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="card-warm backdrop-blur-sm p-6 border border-[#C5A9FF]/20 text-center hover:border-[#C5A9FF]/50 transition-all duration-300 hover:glow-warm hover:scale-105">
            <Mail className="text-[#C5A9FF] mx-auto mb-3" size={24} />
            <h3 className="text-white mb-2">Email</h3>
            <p className="text-white/60 text-sm">avelloxstudio@gmail.com</p>
          </div>

          <div className="card-warm backdrop-blur-sm p-6 border border-[#3A6FF7]/20 text-center hover:border-[#3A6FF7]/50 transition-all duration-300 hover:glow-blue hover:scale-105">
            <Heart className="text-[#FFC7A8] mx-auto mb-3" size={24} />
            <h3 className="text-white mb-2">Response Time</h3>
            <p className="text-white/60 text-sm">Usually within 24h</p>
          </div>

          <div className="card-warm backdrop-blur-sm p-6 border border-[#FFC7A8]/20 text-center hover:border-[#FFC7A8]/50 transition-all duration-300 hover:glow-warm hover:scale-105">
            <Sparkles className="text-[#3A6FF7] mx-auto mb-3" size={24} />
            <h3 className="text-white mb-2">Let&apos;s Collaborate</h3>
            <p className="text-white/60 text-sm">Open to projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}
