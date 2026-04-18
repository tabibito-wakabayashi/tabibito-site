'use client';

const PHRASES = [
  '旅するように、SNSを届ける',
  'Be a Companion',
  '“らしさ”が、羅針盤。',
  'SNS MARKETING',
  '伴走するパートナー',
  'THREADS SCHOOL',
  '人生は、旅だ。',
];

export default function Marquee() {
  return (
    <section className="relative bg-brand-ink text-white py-5 md:py-6 overflow-hidden border-y-4 border-brand-sunset">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...PHRASES, ...PHRASES].map((text, i) => (
          <div key={i} className="flex items-center gap-8 px-6">
            <span className="font-display text-2xl md:text-4xl font-bold">
              {text}
            </span>
            <span className="text-brand-sunset text-3xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
