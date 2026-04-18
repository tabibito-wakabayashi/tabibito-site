'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-white text-brand-ink">
      <div className="section-container py-10 md:py-12">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <Image
              src="/images/logo-horizontal.png"
              alt="株式会社たびびと"
              width={180}
              height={44}
              className="h-10 w-auto"
            />
            <p className="mt-6 text-sm text-brand-ink/70 leading-loose max-w-sm">
              “らしさ”と可能性に寄り添い、
              <br />
              SNSを通じて、あなたの事業や人生の次の一歩を伴走します。
            </p>
          </div>

          <div className="md:col-span-7 md:flex md:items-center md:justify-end">
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-base md:text-lg font-bold tracking-wider">
              {[
                ['/#about', 'ABOUT'],
                ['/#service', 'SERVICE'],
                ['/#works', 'WORKS'],
                ['/#company', 'COMPANY'],
                ['/#contact', 'CONTACT'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-brand-sunset transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-brand-ink/10">
        <div className="section-container py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-brand-ink/50">
          <div>© {new Date().getFullYear()} Tabibito, Inc. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-brand-ink transition-colors">
              プライバシーポリシー
            </a>
            <a href="/tokutei-shogyo" className="hover:text-brand-ink transition-colors">
              特定商取引法
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
