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
  {
    label: '電話番号',
    value: (
      <>
        080-2622-7535
        <span className="mt-1.5 block text-xs text-brand-ink/60">
          受付時間：平日10:00〜18:00／土日祝を除く
        </span>
        <span className="mt-1 block text-xs text-brand-ink/60">
          ※お問い合わせは原則メールにて承ります
        </span>
      </>
    ),
  },
  { label: 'メールアドレス', value: 'info@tabibito.site' },
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
  {
    label: '販売価格',
    value: (
      <>
        受講料 600,000円（税込）
        <span className="mt-1.5 block text-xs text-brand-ink/60">
          ※分割払いをご利用の場合の支払総額・回数・手数料は、お申し込み時およびクレジット契約時にご案内します
        </span>
      </>
    ),
  },
  {
    label: '商品代金以外の必要料金',
    value: (
      <ul className="space-y-1 list-disc pl-5">
        <li>消費税（表示価格に含む）</li>
        <li>振込手数料（銀行振込の場合）</li>
        <li>分割払いをご利用の場合の分割手数料（クレジットカード会社または信販会社の規定によります）</li>
        <li>受講に伴い発生する実費（発生する場合）</li>
      </ul>
    ),
  },
  {
    label: 'お支払い方法',
    value: (
      <ul className="space-y-1 list-disc pl-5">
        <li>クレジットカード決済（一括・分割）</li>
        <li>信販会社の分割払い（ショッピングクレジット）</li>
        <li>銀行振込</li>
        <li>その他、お申し込み時にご案内する方法</li>
      </ul>
    ),
  },
  {
    label: 'お支払い時期',
    value: (
      <ul className="space-y-1 list-disc pl-5">
        <li>クレジットカード決済：各カード会社の規定に基づく引き落とし日</li>
        <li>信販会社の分割払い：各信販会社の規定に基づく引き落とし日</li>
        <li>銀行振込：ご契約後、当社の指定する期日まで</li>
      </ul>
    ),
  },
  {
    label: '役務の提供時期（引き渡し時期）',
    value:
      '本講座の有効期間は、原則としてお申し込み日から3か月間です。具体的な開始日・提供スケジュールはお申し込み時にご案内します。',
  },
  {
    label: '中途解約について',
    value:
      'クーリング・オフ期間経過後も、書面または電磁的方法によるお申し出により、将来に向かって中途解約が可能です。中途解約時に当社が請求できる金額は、特定商取引法に定める上限額（提供済み役務の対価および法定の損害額）の範囲内とします。詳細は契約書面に記載します。',
  },
  {
    label: 'クーリング・オフについて',
    value:
      '本契約は特定商取引法上の「特定継続的役務提供」に該当する場合があり、契約書面を受領した日から起算して8日間は、書面または電磁的記録により無条件で契約を解除（クーリング・オフ）できます。詳細は契約書面に記載します。',
  },
  {
    label: '返品・交換・キャンセルについて',
    value:
      '上記クーリング・オフおよび中途解約の定めによります。デジタルコンテンツ等の性質上、これらの法定の権利の範囲を超える返金・キャンセルはお受けできない場合があります。',
  },
  {
    label: '表現及び商品に関する注意書き',
    value:
      '本サービスの効果には個人差があり、成果を保証するものではありません。記載の成果・体験談等は個人の実績であり、同様の成果を保証するものではありません。',
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

          <p className="mt-6 text-right text-xs text-brand-ink/50">
            制定日：2026年7月4日　／　株式会社たびびと
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
