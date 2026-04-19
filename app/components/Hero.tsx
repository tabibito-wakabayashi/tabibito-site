'use client';

import { motion, useScroll, useTransform, type MotionStyle } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useIsMobile } from '../hooks/useIsMobile';

const HERO_IMAGES = [
  '/images/people/1.jpeg',
  '/images/people/2.jpeg',
  '/images/people/3.jpeg',
  '/images/people/4.jpeg',
  '/images/people/5.jpeg',
  '/images/people/6.jpeg',
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const parallaxStyle: MotionStyle = isMobile ? {} : { y, opacity, scale };

  const title1 = '“らしさ”が'.split('');
  const title2 = '輝く世界を。'.split('');

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-gradient-to-br from-brand-mist via-white to-[#FFEEE2]"
    >
      {/* Static blobs — hidden on mobile to avoid expensive GPU blurs */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-brand-sky/40 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[620px] h-[620px] rounded-full bg-brand-sunset/30 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-[480px] h-[480px] rounded-full bg-brand-sky-light/50 blur-3xl" />
      </div>

      {/* Grid pattern overlay — desktop only */}
      <div className="hidden lg:block absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <motion.div
        style={parallaxStyle}
        className="section-container relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 min-w-0">
            <h1 className="font-display font-black tracking-tight leading-[1.1] pb-2">
              <div className="text-[clamp(2.75rem,10vw,5rem)] md:text-[clamp(3.5rem,8vw,5.25rem)] lg:text-[clamp(3.5rem,6vw,5.25rem)] flex flex-nowrap whitespace-nowrap">
                {title1.map((char, i) => (
                  <motion.span
                    key={`t1-${i}`}
                    initial={{ opacity: 0, y: 60, rotate: -8 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-brand-ink"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="text-[clamp(2.75rem,10vw,5rem)] md:text-[clamp(3.5rem,8vw,5.25rem)] lg:text-[clamp(3.5rem,6vw,5.25rem)] flex flex-nowrap pl-[1.5em] whitespace-nowrap">
                {title2.map((char, i) => (
                  <motion.span
                    key={`t2-${i}`}
                    initial={{ opacity: 0, y: 60, rotate: 8 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.55 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block bg-gradient-to-br from-brand-sky to-brand-sunset bg-clip-text text-transparent"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </h1>

          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              animate={isMobile ? undefined : { y: [0, -14, 0] }}
              transition={isMobile ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative aspect-[4/5] max-w-md mx-auto will-change-transform"
              style={{
                filter: isMobile
                  ? 'drop-shadow(0 15px 20px rgb(26 43 58 / 0.18))'
                  : 'drop-shadow(0 25px 40px rgb(26 43 58 / 0.25))',
              }}
            >
              <div
                className="absolute inset-0 overflow-hidden bg-brand-mist"
                style={{
                  clipPath: 'polygon(38% 0, 100% 0, 100% 62%, 62% 100%, 0 100%, 0 38%)',
                }}
              >
                {HERO_IMAGES.map((src, i) => (
                  <div
                    key={src}
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{ opacity: i === imageIndex ? 1 : 0 }}
                  >
                    <Image
                      src={src}
                      alt="旅をするように、SNSを届ける"
                      fill
                      sizes="(max-width: 1024px) 80vw, 40vw"
                      className="object-cover"
                      priority={i === 0}
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
