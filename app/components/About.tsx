'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useIsMobile } from '../hooks/useIsMobile';

const VALUES = [
  { label: '素直', en: 'Honest' },
  { label: '感謝', en: 'Gratitude' },
  { label: '尊重', en: 'Respect' },
  { label: '貢献', en: 'Contribution' },
  { label: '熱狂', en: 'Passion' },
];

export default function About() {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="relative py-16 md:py-24 bg-white overflow-hidden">
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
            ABOUT
            <span className="w-8 h-[2px] bg-brand-sky" />
          </div>
          <h2 className="section-title mt-4 !text-[clamp(1.1rem,4vw,3.5rem)] whitespace-nowrap">
            誰かの人生を変える、<span className="text-brand-sunset">“その一歩”</span>をともに。
          </h2>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8 text-lg leading-loose text-brand-ink/85 mb-28 text-center"
        >
          <p>
            進むべき道が見えないときこそ、たったひとつの出会いが、未来を照らす<strong className="text-brand-sunset">“灯”</strong>になる。
          </p>
          <p>
            私たち〈株式会社たびびと〉は、
            <br />
            一人ひとりの「らしさ」と「可能性」に寄り添いながら、人生やビジネスの分岐点にそっと火を灯す存在でありたい。
          </p>
          <p>
            世界は広く、人生は旅。
            <br />
            その旅に寄り添い、次の一歩を共に描くために、私たちは、今日も誰かの<strong className="text-brand-sunset">“冒険”</strong>に伴走します。
          </p>
        </motion.div>

        {/* Mission card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden p-10 md:p-16 mb-28 min-h-[20rem] bg-gradient-to-br from-brand-sunset via-brand-sunset-dark to-brand-sky-dark text-white"
        >
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
          <motion.div
            animate={isMobile ? undefined : { rotate: -360 }}
            transition={isMobile ? undefined : { duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-20 -right-20 w-72 h-72 opacity-20"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2" />
              <circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="1.5" />
              <circle cx="100" cy="20" r="8" fill="white" />
            </svg>
          </motion.div>

          <div className="relative">
            <span className="font-en text-xs tracking-[0.3em] font-bold opacity-80">
              MISSION / 使命
            </span>
            <div className="mt-4 font-display font-black leading-tight text-xl md:text-[clamp(1rem,2vw,2rem)]">
              “もし、あの出会いがなかったら…”と思われる特別な存在であり続ける。
            </div>
            <p className="mt-8 text-base md:text-lg leading-loose opacity-90 max-w-3xl">
              成果を出すことは、私たちにとってスタートライン。
              <br />
              その先にある「あなたと出会えてよかった」という言葉を、何よりの価値だと考えています。
            </p>
          </div>
        </motion.div>

        {/* Vision card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden p-10 md:p-16 mb-28 min-h-[20rem] bg-gradient-to-br from-brand-sky via-brand-sky-dark to-brand-sunset text-white"
        >
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
          <motion.div
            animate={isMobile ? undefined : { rotate: 360 }}
            transition={isMobile ? undefined : { duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-20 -right-20 w-72 h-72 opacity-20"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2" />
              <circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="1.5" />
              <circle cx="100" cy="20" r="8" fill="white" />
            </svg>
          </motion.div>

          <div className="relative">
            <span className="font-en text-xs tracking-[0.3em] font-bold opacity-80">
              VISION / 目指す世界
            </span>
            <div className="mt-4 font-display font-black leading-tight text-xl md:text-[clamp(1rem,2vw,2rem)]">
              “らしさ”が輝く世界を。
            </div>
            <p className="mt-8 text-base md:text-lg leading-loose opacity-90 max-w-3xl">
              誰もが、自分だけの“らしさ”を持っている。
              <br />
              それを信じて表現できる世界は、今よりもっと豊かで、やさしい。
              <br />
              私たちはSNSの力で、一人ひとりの“らしさ”が自然に届く世界をつくります。
            </p>
          </div>
        </motion.div>

        {/* Value card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden p-10 md:p-16 mb-28 min-h-[20rem] bg-gradient-to-bl from-brand-sunset via-brand-sunset-dark to-brand-sky text-white"
        >
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
          <motion.div
            animate={isMobile ? undefined : { rotate: -360 }}
            transition={isMobile ? undefined : { duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-20 -right-20 w-72 h-72 opacity-20"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="2" />
              <circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="1.5" />
              <circle cx="100" cy="20" r="8" fill="white" />
            </svg>
          </motion.div>

          <div className="relative">
            <span className="font-en text-xs tracking-[0.3em] font-bold opacity-80">
              VALUE / 行動指針
            </span>
            <div className="mt-4 font-display font-black leading-tight text-xl md:text-[clamp(1rem,2vw,2rem)]">
              応援される人になるために、自ら応援する人になる。
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 md:p-6 hover:bg-white hover:text-brand-ink transition-all duration-300 cursor-default"
                >
                  <div className="font-en text-[10px] tracking-widest opacity-70">
                    {String(i + 1).padStart(2, '0')} / {v.en}
                  </div>
                  <div className="font-display font-black text-2xl md:text-3xl mt-2">
                    {v.label}
                  </div>
                  <div className="w-6 h-[2px] bg-white mt-4 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CEO Message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-10 items-center bg-brand-cream rounded-[2rem] p-8 md:p-14"
        >
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl max-w-sm">
              <Image
                src="/images/ceo-1.jpg"
                alt="代表取締役 若林 真也"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <span className="font-en text-xs tracking-[0.3em] text-brand-sunset font-bold">
              MESSAGE / 代表メッセージ
            </span>
            <h3 className="font-display text-3xl md:text-4xl lg:text-[2.5rem] font-black leading-tight md:whitespace-nowrap">
              一人ひとりの人生に、<br />
              <span className="text-brand-sunset">転機を生む伴走者</span>でありたい。
            </h3>
            <div className="space-y-4 text-brand-ink/85 leading-loose">
              <p>
                人生は、一人ひとりの“冒険”だと思っています。<br />
                どこに向かうかも、いつ何が起きるかも分からない冒険の中で、<br />
                ふとした出会いや小さなきっかけが、その後の人生を大きく変えてしまうことがある。<br />
                私自身、これまでの人生を振り返って、「もしあの出会いがなければ…」と思う瞬間が何度もありました。
              </p>
              <p>
                だからこそ、私たち〈株式会社たびびと〉は、<br />
                “たったひとりの冒険の分岐点になる伴走者”として在り続けたいと考えています。<br />
                インターネットを通じて、誰かの「らしさ」が輝く瞬間に寄り添い、<br />
                人生やビジネスの可能性が大きく広がる“きっかけ”を届けていきます。
              </p>
              <p>
                私たちは、出会うすべての人にとって、<br />
                「あの出会いが転機だった」と思ってもらえるような存在を目指していきます。
              </p>
            </div>
            <div className="pt-4">
              <div className="font-en text-xs tracking-widest text-brand-ink/60">
                CEO
              </div>
              <div className="mt-1 font-display text-2xl font-bold">若林 真也</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
