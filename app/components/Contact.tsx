'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

const INQUIRY = [
  'SNS運用代行について',
  'SNS広告運用について',
  'SNSスクールについて',
  'その他',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? ''),
      company: String(data.get('company') ?? ''),
      email: String(data.get('email') ?? ''),
      tel: String(data.get('tel') ?? ''),
      inquiry: String(data.get('inquiry') ?? ''),
      message: String(data.get('message') ?? ''),
    };

    setSending(true);
    setErrorMessage(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.ok) {
        throw new Error(result.error ?? '送信に失敗しました。');
      }
      form.reset();
      setSubmitted(true);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : '送信に失敗しました。時間をおいて再度お試しください。',
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-sky via-brand-sky-dark to-brand-sunset" />
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />

      <motion.div
        animate={isMobile ? undefined : { scale: [1, 1.2, 1], x: [0, 40, 0] }}
        transition={isMobile ? undefined : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={isMobile ? undefined : { scale: [1, 1.15, 1], x: [0, -40, 0] }}
        transition={isMobile ? undefined : { duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none"
      />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-white"
          >
            <div className="section-label !text-white/90">
              <span className="w-8 h-[2px] bg-white" />
              CONTACT
              <span className="w-8 h-[2px] bg-white" />
            </div>
            <h2 className="section-title mt-4">
              その一歩に、<br />
              <span className="text-brand-ink/90">伴走します。</span>
            </h2>
            <p className="mt-8 text-white/90 leading-loose">
              課題がまだ曖昧でも大丈夫です。<br />
              SNS運用・広告・採用まで、まずは今の状況をお聞かせください。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl"
            >
              {submitted ? (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-brand-sunset text-white flex items-center justify-center text-3xl">
                    ✓
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">送信しました！</h3>
                  <p className="mt-3 text-brand-ink/70">
                    担当者より24時間以内にご連絡いたします。
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="お名前" required>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="山田 太郎"
                        className="form-input"
                      />
                    </Field>
                    <Field label="会社名">
                      <input
                        type="text"
                        name="company"
                        placeholder="株式会社〇〇"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mt-5">
                    <Field label="メールアドレス" required>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@example.com"
                        className="form-input"
                      />
                    </Field>
                    <Field label="電話番号">
                      <input
                        type="tel"
                        name="tel"
                        placeholder="090-0000-0000"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <Field label="お問い合わせ種別" required className="mt-5">
                    <div className="flex flex-wrap gap-2">
                      {INQUIRY.map((item, i) => (
                        <label key={i} className="cursor-pointer">
                          <input
                            type="radio"
                            name="inquiry"
                            value={item}
                            defaultChecked={i === 0}
                            className="peer sr-only"
                          />
                          <span className="inline-block px-4 py-2 rounded-full text-sm font-bold border-2 border-brand-ink/15 peer-checked:bg-brand-sunset peer-checked:text-white peer-checked:border-brand-sunset transition-all">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </Field>

                  <Field label="お問い合わせ内容" required className="mt-5">
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="現在の状況や、ご相談したい内容をお書きください。"
                      className="form-input resize-none"
                    />
                  </Field>

                  {errorMessage && (
                    <p className="mt-5 text-sm text-red-600" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <label className="flex items-center gap-2 text-sm text-brand-ink/70 cursor-pointer">
                      <input type="checkbox" required className="w-4 h-4 accent-brand-sunset" />
                      <span>プライバシーポリシーに同意する</span>
                    </label>
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {sending ? '送信中…' : '送信する'}
                      {!sending && <span className="text-lg">→</span>}
                    </button>
                  </div>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: 0.75rem;
          background: #f3f7fa;
          border: 2px solid transparent;
          font-size: 0.95rem;
          transition: all 0.2s;
          font-family: inherit;
          color: #1a2b3a;
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: #d8794b;
          background: #ffffff;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  children,
  className = '',
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs font-bold tracking-widest text-brand-ink/70 mb-2">
        {label}
        {required && <span className="ml-1 text-brand-sunset">*</span>}
      </label>
      {children}
    </div>
  );
}
