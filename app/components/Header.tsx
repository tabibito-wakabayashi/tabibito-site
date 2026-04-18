'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const NAV = [
  { label: 'ABOUT', jp: '私たちについて', href: '/#about' },
  { label: 'SERVICE', jp: '事業', href: '/#service' },
  { label: 'WORKS', jp: '実績', href: '/#works' },
  { label: 'COMPANY', jp: '会社概要', href: '/#company' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-sm pt-3 pb-6'
            : 'bg-transparent pt-5 pb-8'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo-horizontal.png"
              alt="株式会社たびびと"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-semibold text-brand-ink"
              >
                <span className="block font-en tracking-widest">{item.label}</span>
                <span className="absolute left-1/2 -translate-x-1/2 top-full mt-0.5 text-[10px] text-brand-sky opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.jp}
                </span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-brand-sunset group-hover:w-4/5 transition-all duration-300" />
              </a>
            ))}
            <a href="/#contact" className="btn-primary ml-4 !py-3 !px-6 text-sm">
              CONTACT
              <span className="text-base leading-none">→</span>
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden w-11 h-11 rounded-full bg-brand-ink text-white flex items-center justify-center"
            aria-label="メニューを開く"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-gradient-to-br from-brand-sky via-brand-sky-dark to-brand-sunset text-white p-8 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-en tracking-[0.3em] text-sm">MENU</span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center"
                  aria-label="メニューを閉じる"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col justify-center gap-2">
                {NAV.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="border-b border-white/20 py-5 flex items-baseline gap-4"
                  >
                    <span className="font-en text-3xl font-bold">{item.label}</span>
                    <span className="text-xs text-white/70">{item.jp}</span>
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href="/#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center justify-center gap-2 w-full py-5 bg-white text-brand-ink rounded-full font-bold"
              >
                CONTACT
                <span>→</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
