'use client';

import { motion } from 'framer-motion';

const REASONS = [
  {
    num: '01',
    title: '積み上げてきた実績',
    desc: '制作クリエイティブは1,000本以上、支援実績アカウント数は150以上。運用と制作を重ねる中で、成果につながる勝ち筋を蓄積してきました。',
  },
  {
    num: '02',
    title: '成果起点のチーム体制',
    desc: '成果から逆算して戦略・企画・改善まで設計。数字に向き合いながら、成果創出にこだわるチームです。',
  },
  {
    num: '03',
    title: 'クリエイターとつくる発信',
    desc: 'SNSで伝わる感覚を持つクリエイター視点も掛け合わせます。ブランドの魅力を、ユーザーに届く表現へと磨き上げます。',
  },
  {
    num: '04',
    title: '伴走し続ける熱量',
    desc: '運用の現場に深く入り込みながら改善を積み重ねます。外部パートナーではなく、同じ目線で走る伴走者として支援します。',
  },
  {
    num: '05',
    title: '希少性の高いThreads知見',
    desc: '本格的に取り組む企業が少ないThreads領域にいち早く向き合い、運用知見を蓄積。媒体特性を捉えた設計で、先行者メリットを成果につなげます。',
  },
];

export default function Why() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-brand-sunset/10 blur-3xl pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="section-label justify-center">
            <span className="w-8 h-[2px] bg-brand-sky" />
            WHY TABIBITO
            <span className="w-8 h-[2px] bg-brand-sky" />
          </div>
          <h2 className="section-title mt-4">
            なぜ、<span className="text-brand-sunset">私たち</span>なのか。
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-brand-ink/75 leading-loose">
            数字で語れる成果と、人でしか出せない熱量。
            <br />
            このバランスこそが、私たちが選ばれ続ける理由です。
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="flex flex-wrap justify-center gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-2xl bg-brand-mist border border-brand-ink/10 hover:border-brand-sunset hover:bg-white hover:shadow-xl transition-all duration-300 w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="font-en text-5xl font-black text-brand-sunset leading-none">
                  {r.num}
                </span>
                <div className="flex-1 h-[2px] bg-brand-ink/15 mt-6 group-hover:bg-brand-sunset transition-colors" />
              </div>
              <h3 className="font-bold text-xl md:text-2xl leading-tight text-brand-ink">
                {r.title}
              </h3>
              <p className="mt-4 text-sm text-brand-ink/70 leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
