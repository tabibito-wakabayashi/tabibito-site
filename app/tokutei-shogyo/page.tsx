import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | 株式会社たびびと',
  description: '株式会社たびびとの特定商取引法に基づく表記のページです。',
};

const INFO: { label: string; value: React.ReactNode }[] = [
  { label: '販売事業者', value: '株式会社たびびと' },
  { label: '運営責任者', value: '若林 真也' },
  { label: '所在地', value: '〒150-0002 東京都渋谷区渋谷3-2-4' },
  { label: 'メールアドレス', value: 'tabibito.company@gmail.com' },
  {
    label: '販売URL',
    value: (
      <a
        href="https://tabibito.site/"
        className="text-brand-sky-dark hover:text-brand-sunset transition-colors underline underline-offset-4"
      >
        https://tabibito.site/
      </a>
    ),
  },
  { label: '販売価格', value: 'サービスの資料に記載（消費税込）' },
  {
    label: '商品代金以外の必要料金',
    value: (
      <ul className="space-y-1 list-disc pl-5">
        <li>消費税</li>
        <li>振込手数料（銀行振込の場合）</li>
        <li>送料（物販の場合、送料は商品ページに記載）</li>
      </ul>
    ),
  },
  {
    label: 'お支払い方法',
    value: (
      <ul className="space-y-1 list-disc pl-5">
        <li>クレジットカード決済</li>
        <li>銀行振込</li>
        <li>その他、販売ページに記載の方法</li>
      </ul>
    ),
  },
  {
    label: 'お支払い時期',
    value: (
      <ul className="space-y-1 list-disc pl-5">
        <li>クレジットカード決済：各カード</li>
        <li>
          銀行振込：ご注文後5日以内（期日までに入金が確認できない場合はキャンセル扱いとなります）
        </li>
      </ul>
    ),
  },
  {
    label: '引き渡し時期',
    value: (
      <ul className="space-y-1 list-disc pl-5">
        <li>デジタルコンテンツ：決済完了後、即時ダウンロードまたはメール送付</li>
        <li>サービス提供：お申し込み時にご案内する日程</li>
      </ul>
    ),
  },
  {
    label: '返品・交換・キャンセルについて',
    value: 'デジタルコンテンツやサービス提供後のキャンセルは不可',
  },
  {
    label: '表現及び商品に関する注意書き',
    value: '本商品・サービスの効果には個人差があり、必ずしも効果を保証するものではありません。',
  },
];

export default function TokuteiShogyoPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      <Header />

      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="section-container max-w-4xl">
          <div className="section-label">
            <span className="w-8 h-[2px] bg-brand-sky" />
            LEGAL NOTICE
            <span className="w-8 h-[2px] bg-brand-sky" />
          </div>
          <h1 className="mt-4 font-bold tracking-tight leading-[1.15] whitespace-nowrap text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            特定商取引法に基づく表記
          </h1>

          <div className="mt-12 md:mt-16 bg-white rounded-[2rem] border border-brand-ink/10 p-6 md:p-10 shadow-sm">
            <dl>
              {INFO.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[110px,1fr] md:grid-cols-[220px,1fr] gap-4 md:gap-8 py-5 border-b border-brand-ink/10 last:border-0"
                >
                  <dt className="font-en text-xs tracking-widest text-brand-sky font-bold pt-1">
                    {item.label}
                  </dt>
                  <dd className="text-brand-ink leading-relaxed text-sm md:text-base">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
