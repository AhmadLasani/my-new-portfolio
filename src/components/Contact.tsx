
import React, { useState } from 'react';
import {
  FiMail,
  FiSend,
  FiCopy,
  FiCheck,
  FiLoader,
  FiAlertCircle,
} from 'react-icons/fi';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const WEB3FORMS_ACCESS_KEY = '79e7c7d7-eca1-443f-8b3a-8915dd5c0008';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderSubject, setSenderSubject] = useState(
    'Project Collaboration Inquiry'
  );
  const [senderMessage, setSenderMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    if (
      !senderName.trim() ||
      !senderEmail.trim() ||
      !senderSubject.trim() ||
      !senderMessage.trim()
    ) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields before submitting.',
      });
      return;
    }

    if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setStatus({
        type: 'error',
        message: 'Please add your Web3Forms access key in the code first.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: senderName.trim(),
          email: senderEmail.trim(),
          subject: senderSubject.trim(),
          message: senderMessage.trim(),

          // Your portfolio email receives the notification.
          to: personal.email,

          // Web3Forms spam protection.
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Unable to send your message. Please try again.'
        );
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully! Thank you for reaching out.',
      });

      setSenderName('');
      setSenderEmail('');
      setSenderSubject('Project Collaboration Inquiry');
      setSenderMessage('');
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative border-b border-white/10 bg-[#070708] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 border-b border-white/10 pb-6 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[#9CA3AF]">
              <span
                className="inline-block h-2 w-2 bg-white"
                aria-hidden="true"
              />
              <span>Get in Touch</span>
            </div>

            <h2 className="font-editorial text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let's Connect
            </h2>
          </div>

          {/* <p className="max-w-md font-mono text-sm leading-relaxed text-[#9CA3AF]">
            Have a project in mind, a job opportunity, or an idea to discuss?
            I'd love to hear from you.
          </p> */}
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Email */}
          <div className="space-y-4 lg:col-span-5">
            <div className="rounded-sm border border-white/10 bg-[#0C0C0E] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 bg-[#141416] text-white">
                  <FiMail className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <div className="font-mono text-xs text-[#9CA3AF]">
                    Direct Email
                  </div>

                  <div className="break-all font-mono text-sm font-medium text-white sm:text-base">
                    {personal.email}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 border-t border-white/10 pt-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-1.5 bg-white px-4 py-2 text-xs font-semibold text-black transition-colors hover:bg-neutral-200"
                >
                  <FiMail className="h-3.5 w-3.5" />
                  <span>Open Mail</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 border border-white/15 bg-[#141416] px-3.5 py-2 font-mono text-xs text-neutral-300 transition-colors hover:border-white hover:text-white"
                >
                  {copiedEmail ? (
                    <>
                      <FiCheck className="h-3.5 w-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="h-3.5 w-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* <div className="rounded-sm border border-white/10 bg-[#0C0C0E] p-6">
              <div className="mb-2 font-mono text-xs uppercase tracking-widest text-[#9CA3AF]">
                Open to
              </div>

              <p className="text-sm leading-7 text-neutral-300">
                Software engineering opportunities, frontend development,
                technical collaborations, and building useful web products.
              </p>
            </div> */}
          </div>

          {/* Right Column: Web3Forms */}
          <div className="rounded-sm border border-white/10 bg-[#0C0C0E] p-6 sm:p-8 lg:col-span-7">
            <div className="mb-6 border-b border-white/10 pb-4">
              <h3 className="font-editorial text-xl font-bold text-white">
                Send a Message
              </h3>

              <p className="mt-2 text-sm text-[#9CA3AF]">
                Fill out the form below and I'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              {/* Honeypot spam protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div>
                <label
                  htmlFor="sender-name"
                  className="mb-1.5 block text-xs text-[#9CA3AF]"
                >
                  Your Name / Organization
                </label>

                <input
                  id="sender-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  maxLength={100}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-sm border border-white/15 bg-[#121214] px-3.5 py-2.5 font-sans text-xs text-white placeholder-neutral-500 focus:border-white focus:outline-none disabled:opacity-50 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="sender-email"
                  className="mb-1.5 block text-xs text-[#9CA3AF]"
                >
                  Your Email Address
                </label>

                <input
                  id="sender-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="you@example.com"
                  maxLength={254}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-sm border border-white/15 bg-[#121214] px-3.5 py-2.5 font-sans text-xs text-white placeholder-neutral-500 focus:border-white focus:outline-none disabled:opacity-50 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="sender-subject"
                  className="mb-1.5 block text-xs text-[#9CA3AF]"
                >
                  Subject Line
                </label>

                <input
                  id="sender-subject"
                  name="subject"
                  type="text"
                  value={senderSubject}
                  onChange={(e) => setSenderSubject(e.target.value)}
                  placeholder="Software Developer Opportunity"
                  maxLength={150}
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-sm border border-white/15 bg-[#121214] px-3.5 py-2.5 font-sans text-xs text-white placeholder-neutral-500 focus:border-white focus:outline-none disabled:opacity-50 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="sender-message"
                  className="mb-1.5 block text-xs text-[#9CA3AF]"
                >
                  Message
                </label>

                <textarea
                  id="sender-message"
                  name="message"
                  rows={5}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Tell me about your project, opportunity, or question..."
                  maxLength={5000}
                  required
                  disabled={isSubmitting}
                  className="w-full resize-y rounded-sm border border-white/15 bg-[#121214] px-3.5 py-2.5 font-sans text-xs text-white placeholder-neutral-500 focus:border-white focus:outline-none disabled:opacity-50 sm:text-sm"
                />
              </div>

              {/* Submission Status */}
              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-2 border p-3 font-sans text-sm ${
                    status.type === 'success'
                      ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-300'
                      : 'border-red-500/30 bg-red-500/5 text-red-300'
                  }`}
                >
                  {status.type === 'success' ? (
                    <FiCheck className="mt-0.5 h-4 w-4 shrink-0" />
                  ) : (
                    <FiAlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  )}

                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black shadow-sm transition-colors hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <FiLoader className="h-3.5 w-3.5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="h-3.5 w-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="mt-3 font-sans text-xs text-neutral-500">
                  Your message will be submitted securely through Web3Forms.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
