import React, { useState } from 'react';
import {
  ArrowUp,
  Check,
  Copy,
  Linkedin,
  Mail,
  Send,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { Reveal } from './MotionPrimitives';

export const ContactAndFooter: React.FC = () => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Engineering Collaboration / Opportunity');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [preparedDraft, setPreparedDraft] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Clipboard fallback omitted intentionally; input remains selectable
    }
  };

  const handlePrepareMailto = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!name.trim() || !senderEmail.trim() || !message.trim()) {
      setFormError('Please fill in your name, email address, and message.');
      return;
    }

    const formattedBody = [
      `Hi Memoona,`,
      '',
      message.trim(),
      '',
      `---`,
      `From: ${name.trim()} (${senderEmail.trim()})`,
    ].join('\n');

    setPreparedDraft(formattedBody);

    const mailtoHref = `mailto:${encodeURIComponent(
      PROFILE.email
    )}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(
      formattedBody
    )}`;

    window.location.href = mailtoHref;
  };

  const handleCopyDraft = async () => {
    if (!preparedDraft) return;
    try {
      await navigator.clipboard.writeText(
        `To: ${PROFILE.email}\nSubject: ${subject}\n\n${preparedDraft}`
      );
      setCopiedDraft(true);
      window.setTimeout(() => setCopiedDraft(false), 2200);
    } catch {
      // Ignore clipboard permission errors
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section
        id="contact"
        className="border-b border-[#30352F] bg-[#101110] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Direct Contact Info */}
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-xs tracking-wider text-[#C5F467]">
                08 — Contact
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#F2F1EA] sm:text-4xl">
                Have an interesting problem in mind?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#A4AAA2]">
                I&apos;m always interested in meaningful conversations,
                technical collaboration, and opportunities to build useful
                software.
              </p>

              <div className="mt-8 space-y-4 border-t border-[#30352F] pt-6">
                {/* LinkedIn */}
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-[#30352F] bg-[#171917] p-4 transition-colors hover:border-[#C5F467]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#30352F] bg-[#101110] text-[#C5F467]">
                      <Linkedin className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-[#A4AAA2]">
                        LinkedIn
                      </p>
                      <p className="text-sm font-medium text-[#F2F1EA]">
                        linkedin.com/in/monaamobeen
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#C5F467]">
                    Open ↗
                  </span>
                </a>

                {/* Direct Email */}
                <div className="rounded-xl border border-[#30352F] bg-[#171917] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="flex items-center gap-3.5 min-w-0 group"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#30352F] bg-[#101110] text-[#C5F467]">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-xs text-[#A4AAA2]">
                          Email
                        </p>
                        <p className="truncate text-sm font-medium text-[#F2F1EA] transition-colors group-hover:text-[#C5F467]">
                          {PROFILE.email}
                        </p>
                      </div>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex min-h-[36px] shrink-0 items-center gap-1.5 rounded-lg border border-[#30352F] bg-[#101110] px-3 py-1.5 font-mono text-xs text-[#F2F1EA] transition-colors hover:border-[#C5F467] hover:text-[#C5F467]"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#C5F467]" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Honest Email Handoff Form */}
            <Reveal delay={0.1} className="lg:col-span-7">
              <form
                onSubmit={handlePrepareMailto}
                noValidate
                className="rounded-xl border border-[#30352F] bg-[#171917] p-6 sm:p-8"
              >
                <div className="border-b border-[#30352F] pb-4">
                  <h3 className="font-display text-lg font-semibold text-[#F2F1EA]">
                    Compose a Direct Inquiry
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#A4AAA2]">
                    This static portfolio has no backend mail server.
                    Submitting opens a pre-filled draft in your email client
                    and lets you copy the message text directly.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs text-[#A4AAA2]"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ada Lovelace"
                      className="mt-2 w-full rounded-lg border border-[#30352F] bg-[#101110] px-4 py-2.5 text-sm text-[#F2F1EA] placeholder:text-[#A4AAA2]/50 focus:border-[#C5F467] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs text-[#A4AAA2]"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="mt-2 w-full rounded-lg border border-[#30352F] bg-[#101110] px-4 py-2.5 text-sm text-[#F2F1EA] placeholder:text-[#A4AAA2]/50 focus:border-[#C5F467] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs text-[#A4AAA2]"
                  >
                    Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-[#30352F] bg-[#101110] px-4 py-2.5 text-sm text-[#F2F1EA] focus:border-[#C5F467] focus:outline-none"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs text-[#A4AAA2]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share a bit about the project, role, or technical problem..."
                    className="mt-2 w-full rounded-lg border border-[#30352F] bg-[#101110] px-4 py-2.5 text-sm text-[#F2F1EA] placeholder:text-[#A4AAA2]/50 focus:border-[#C5F467] focus:outline-none"
                  />
                </div>

                {formError && (
                  <p
                    role="alert"
                    className="mt-4 rounded-lg border border-amber-500/40 bg-amber-950/30 px-4 py-2.5 text-xs text-amber-200"
                  >
                    {formError}
                  </p>
                )}

                {preparedDraft && (
                  <div
                    role="status"
                    className="mt-4 rounded-lg border border-[#C5F467]/40 bg-[#20251F] p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-medium text-[#F2F1EA]">
                        Email draft prepared for your mail app (not sent by a
                        server).
                      </p>
                      <button
                        type="button"
                        onClick={handleCopyDraft}
                        className="inline-flex items-center gap-1.5 rounded border border-[#30352F] bg-[#101110] px-2.5 py-1 font-mono text-[11px] text-[#C5F467]"
                      >
                        {copiedDraft ? (
                          <>
                            <Check className="h-3 w-3" aria-hidden="true" />
                            <span>Copied Draft</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" aria-hidden="true" />
                            <span>Copy Draft Text</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#C5F467] px-6 py-2.5 text-sm font-medium text-[#101110] transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Open Email Draft</span>
                  </button>

                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[#A4AAA2] underline-offset-4 hover:text-[#C5F467] hover:underline"
                  >
                    Or message directly on LinkedIn
                  </a>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="bg-[#101110] py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="font-display text-base font-semibold tracking-tight text-[#F2F1EA]">
              MEMOONA MOBEEN
            </p>
            <p className="mt-1 font-mono text-xs text-[#A4AAA2]">
              AI · Software · Engineering
            </p>
            <p className="mt-2 text-xs text-[#A4AAA2]">
              Designed with curiosity. Built with intention.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-[#30352F] bg-[#171917] px-4 py-2 font-mono text-xs text-[#F2F1EA] transition-colors hover:border-[#C5F467] hover:text-[#C5F467] whitespace-nowrap shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </>
  );
};
