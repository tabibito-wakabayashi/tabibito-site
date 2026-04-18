'use client';

import { motion } from 'framer-motion';

const INFO = [
  { label: '会社', value: '株式会社たびびと' },
  { label: '所在地', value: '〒150-0002 東京都渋谷区渋谷3-2-4' },
  { label: '代表取締役', value: '若林真也' },
  { label: '従業員数', value: '10名（業務委託含む）' },
  { label: '取引銀行', value: 'みずほ銀行　住信SBIネット銀行' },
  { label: '資本金', value: '1,000,000円' },
];

export default function Company() {
  return (
    <section id="company" className="relative py-16 md:py-24 bg-brand-cream overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-sky/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-brand-sunset/10 blur-3xl pointer-events-none" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-28">
              <div className="section-label">
                <span className="w-8 h-[2px] bg-brand-sky" />
                COMPANY
                <span className="w-8 h-[2px] bg-brand-sky" />
              </div>
              <h2 className="section-title mt-4">
                会社概要
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm">
              <dl>
                {INFO.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="grid grid-cols-[100px,1fr] md:grid-cols-[180px,1fr] gap-4 md:gap-8 py-5 border-b border-brand-ink/10 last:border-0"
                  >
                    <dt className="font-en text-xs tracking-widest text-brand-sky font-bold pt-1">
                      {item.label}
                    </dt>
                    <dd className="text-brand-ink leading-relaxed text-sm md:text-base">
                      {item.value}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
