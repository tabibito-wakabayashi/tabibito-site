'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SERVICES = [
  {
    number: '01',
    en: 'SNS MARKETING',
    jp: 'SNSマーケティング事業',
    title: 'SNSマーケティング事業',
    desc: '運用代行・広告運用を一気通貫でサポート。アカウント設計、コンテンツ制作、データ分析、広告配信まで、ブランドの熱量を届く熱量に変えるプロフェッショナルチームが伴走します。',
    bullets: [
      { k: 'アカウント戦略設計', v: 'ゴールやブランド理解から逆算した設計' },
      { k: 'SNS運用代行', v: 'Instagram / Threads / TikTok / YouTube' },
      { k: '広告運用', v: 'Meta / Google / TikTok Ads' },
      { k: 'クリエイティブ制作', v: '動画・静止画・ライティング' },
    ],
    image: '/images/sns-hero.jpg',
    color: 'sky',
  },
  {
    number: '02',
    en: 'SNS SCHOOL',
    jp: 'Threadsスクール事業',
    title: 'Threadsスクール事業',
    desc: '業界初のThreadsに特化したスクール。業界特有の“スキルの教育で終了”するのではなく、SNS運用代行で稼ぐ“自立人材”を育成する実践特化型プログラムです。',
    bullets: [
      { k: 'Threads特化カリキュラム', v: '最新アルゴリズム対応' },
      { k: '1on1コーチング', v: '現役運用者による個別伴走' },
      { k: '案件保証', v: '弊社が案件を発注' },
      { k: '営業全面サポート', v: '案件を自分で取れるまで個別伴走' },
    ],
    image: '/images/school-1.png',
    color: 'sunset',
  },
];

export default function Service() {
  return (
    <section id="service" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="section-label">
              <span className="w-8 h-[2px] bg-brand-sky" />
              SERVICE
              <span className="w-8 h-[2px] bg-brand-sky" />
            </div>
            <h2 className="section-title mt-4 md:!text-5xl lg:!text-6xl md:whitespace-nowrap">
              <span className="text-brand-sunset">“らしさ”</span>を武器に、<br className="md:hidden" />
              事業や人生を前へ。
            </h2>
          </div>
        </motion.div>

        <div className="space-y-10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group relative grid lg:grid-cols-12 gap-8 lg:gap-0 bg-brand-mist rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Image side */}
              <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-full"
                >
                  <Image src={s.image} alt={s.jp} fill className="object-cover" />
                </motion.div>
              </div>

              {/* Content side */}
              <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                {s.jp !== s.title && (
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${
                        s.color === 'sky' ? 'bg-brand-sky' : 'bg-brand-sunset'
                      }`}
                    />
                    <span className="text-sm font-bold tracking-widest text-brand-ink/60">
                      {s.jp}
                    </span>
                  </div>
                )}
                <h3 className="font-display text-3xl md:text-5xl font-black leading-[1.15] text-brand-ink">
                  {s.title}
                </h3>
                <p className="mt-5 text-brand-ink/80 leading-loose">{s.desc}</p>

                <div className="mt-8 grid sm:grid-cols-2 gap-3">
                  {s.bullets.map((b, bi) => (
                    <div
                      key={bi}
                      className="flex items-start gap-3 p-3 rounded-xl md:hover:bg-white/60 md:transition-colors"
                    >
                      <span
                        className={`flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${
                          s.color === 'sky' ? 'bg-brand-sky' : 'bg-brand-sunset'
                        }`}
                      >
                        ✓
                      </span>
                      <div>
                        <div className="font-bold text-sm text-brand-ink">{b.k}</div>
                        <div className="text-xs text-brand-ink/60 mt-0.5">{b.v}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 font-bold ${
                      s.color === 'sky' ? 'text-brand-sky-dark' : 'text-brand-sunset'
                    } group/btn`}
                  >
                    詳しく相談する
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
