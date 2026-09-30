import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Send, Check, Copy, CheckCircle2, Phone } from 'lucide-react';

export const Contact = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitted(true);
    setTimeout(() => {
      const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(
        formState.subject || `Portfolio Inquiry from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="Get in Touch"
          title="Start a Conversation"
          description="Interested in discussing a backend engineering internship, full-stack opportunity, or software engineering project? Reach out directly."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          
          {/* Left: Direct Information */}
          <div className="md:col-span-2 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div>
                <span className="text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-wider block mb-1">
                  Primary Email
                </span>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60">
                  <span className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200 truncate mr-2">
                    {personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    aria-label="Copy email address"
                    className="p-1 rounded text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                  </button>
                </div>
              </div>

              {personal.phone && (
                <div>
                  <span className="text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-wider block mb-1">
                    Phone
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-800 dark:text-slate-200 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60">
                    <Phone className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span>{personal.phone}</span>
                  </div>
                </div>
              )}

              <div>
                <span className="text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-wider block mb-1">
                  Location
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200">
                  <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{personal.location}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Open for:
                <ul className="mt-1 space-y-1 text-slate-800 dark:text-slate-200 font-medium">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Software Engineering Internships</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Full-Stack &amp; Backend Roles</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span>AI/ML Collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">Opening Email Client...</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Drafting your inquiry to {personal.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline pt-2 inline-block"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Backend / Full-Stack Opportunity"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Khaleed, I'd like to discuss an engineering role..."
                      className="w-full px-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
