'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const WORKS = [
  {
    industry: '集客 / 学習塾',
    title: 'SNS運用で生徒30名獲得に貢献',
    summary: '学習塾の魅力や指導価値が伝わる発信設計により、認知拡大からLP流入、入塾獲得までを一貫して支援。',
    metrics: [
      { label: '最高再生数', value: '約400万回' },
      { label: '総フォロワー数', value: '約8万人' },
      { label: '生徒獲得数', value: '約30名' },
    ],
    image: '/images/360_F_853885877.jpg',
    tag: 'Instagram / TikTok',
  },
  {
    industry: '採用 / 建設業',
    title: 'TikTokで母集団形成を加速、3ヶ月で4名採用',
    summary: '建設業の仕事や社風が伝わるコンテンツで求職者との接点を創出。高い認知獲得を実現し、短期間で採用成果まで結びつけました。',
    metrics: [
      { label: '最高再生数', value: '約250万回' },
      { label: 'フォロワー数', value: '約1.3万人' },
      { label: '採用実績', value: '4名' },
    ],
    image: '/images/360_F_603212703.jpg',
    tag: 'TikTok',
  },
  {
    industry: '集客 / 美容サロン',
    title: 'Threads運用開始2週間で予約20件超を獲得',
    summary: '施術の魅力や世界観を伝える発信設計により、短期間で認知を拡大。DMでの相談を200件以上集め、来店予約につながる導線を構築しました。',
    metrics: [
      { label: '予約獲得数', value: '20件+' },
      { label: 'DM問い合わせ', value: '200件+' },
      { label: '総閲覧数', value: '約20万回' },
    ],
    image: '/images/AdobeStock_1848977828.jpg',
    tag: 'Threads',
  },
  {
    industry: '会社員・主婦',
    title: 'リリース3ヶ月で受講生50名突破',
    summary: 'Threadsに特化した実践型カリキュラムで、未経験からでも収益化を目指せる学習環境を提供しています。',
    metrics: [
      { label: '満足度', value: '96%' },
      { label: '平均収益化まで', value: '2ヶ月' },
      { label: '卒業生平均副業収入', value: '7.5万円' },
    ],
    image: '/images/AdobeStock_1025414470.jpg',
    tag: 'スクール',
  },
];

export default function Works() {
  return (
    <section id="works" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="section-label">
            <span className="w-8 h-[2px] bg-brand-sky" />
            WORKS
          </div>
          <h2 className="section-title mt-4">
            クライアントと歩んだ、
            <span className="bg-gradient-to-r from-brand-sky to-brand-sunset bg-clip-text text-transparent">
              成果の軌跡。
            </span>
          </h2>
          <p className="mt-6 text-brand-ink/75 leading-relaxed">
            業種やフェーズを問わず、数字とストーリーの両面から成果を積み上げてきました。
            その一例をご紹介します。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {WORKS.map((w, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-brand-mist rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-full"
                >
                  <Image src={w.image} alt={w.title} fill className="object-cover" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/10 to-transparent" />
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur rounded-full px-3 py-1 text-[10px] font-bold tracking-widest">
                  {w.tag}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="font-en text-xs tracking-widest opacity-80">
                    CASE / {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="mt-1 text-sm font-bold opacity-90">
                    {w.industry}
                  </div>
                </div>
              </div>

              <div className="p-7 md:p-9">
                <h3 className="font-display text-xl md:text-2xl font-bold leading-snug text-brand-ink group-hover:text-brand-sunset transition-colors">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm text-brand-ink/70 leading-relaxed">
                  {w.summary}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 pt-6 border-t border-brand-ink/10">
                  {w.metrics.map((m, mi) => (
                    <div key={mi} className="text-center">
                      <div className="text-[10px] tracking-widest text-brand-ink/50 font-bold">
                        {m.label}
                      </div>
                      <div className="mt-1 font-en text-xl md:text-2xl font-black text-brand-sunset">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
