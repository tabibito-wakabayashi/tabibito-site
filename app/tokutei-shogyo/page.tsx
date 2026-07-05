import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | 株式会社たびびと',
  description: '株式会社たびびとの特定商取引法に基づく表記のページです。',
};

const INFO: { label: string; value: React.ReactNode }[] = [
  { label: '販売事業者', value: '株式会社たびびと' },
  { label: '運営統括責任者', value: '若林 真也' },
  { label: '所在地', value: '〒150-0002 東京都渋谷区渋谷3-2-4 帝都青山第2ビルBIZcomfort渋谷南4F-01' },
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
      <>
        <a
          href="https://tabibito.site/"
          className="text-brand-sky-dark hover:text-brand-sunset transition-colors underline underline-offset-4"
        >
          https://tabibito.site/
        </a>
        <span className="mt-1.5 block text-xs text-brand-ink/60">
          専用ページ：
          <a
            href="https://tabibito.site/threads-program"
            className="text-brand-sky-dark hover:text-brand-sunset transition-colors underline underline-offset-4"
          >
            https://tabibito.site/threads-program
          </a>
        </span>
      </>
    ),
  },
  {
    label: '販売価格',
    value: (
      <>
        Threads運用実践プログラム 受講料 600,000円（税込）
        <span className="mt-1.5 block text-xs text-brand-ink/60">
          分割払いをご利用の場合の総額例：銀行振込・3回払いで総額600,000円（別途、振込手数料が発生します）。支払総額・回数・手数料は、お申し込み時およびご契約時にご案内します。
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
        <li>分割手数料（カード会社での分割払いをご利用の場合、各社の規定によります）</li>
        <li>受講に伴い発生する実費（発生する場合）</li>
      </ul>
    ),
  },
  {
    label: 'お支払い方法',
    value: (
      <ul className="space-y-1 list-disc pl-5">
        <li>銀行振込（分割払いは原則3回まで）</li>
        <li>
          クレジットカード決済（一括／カード会社での分割払いは、各カード会社へのお申し込みによります）
        </li>
      </ul>
    ),
  },
  {
    label: 'お支払い時期',
    value: (
      <ul className="space-y-1 list-disc pl-5">
        <li>銀行振込：契約締結日から3営業日以内にお支払いください。</li>
        <li>
          クレジットカード決済：お申し込み時に決済手続きを行います。実際の引き落とし日は各カード会社の規定に基づきます。
        </li>
      </ul>
    ),
  },
  {
    label: '役務の提供時期（引き渡し時期）',
    value:
      '本プログラムの受講期間は、お申し込み日から3か月間です。開始日・提供スケジュールはお申し込み時にご案内します。',
  },
  {
    label: '動作環境',
    value:
      '本プログラムはオンライン（LearningBox／テキスト教材）で提供します。推奨環境：Google Chrome（最新版）／PC・スマートフォンに対応。',
  },
  {
    label: '中途解約・返金について',
    value: (
      <div className="space-y-3">
        <p>
          受講開始後も、書面または電磁的方法によるお申し出により、将来に向かって中途解約が可能です。当社は、解約のお申し出を受けた時点までに提供済みの役務（教材の閲覧、面談の実施等）に相当する額を控除し、残額を返金します。
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>
            <span className="font-bold">返金の申請方法：</span>
            メール（info@tabibito.site）、お問い合わせフォーム、または書面のいずれかにて承ります。
          </li>
          <li>
            <span className="font-bold">返金の時期：</span>
            返金額の確定後、3営業日以内にご指定の口座へお振込みします。
          </li>
          <li>
            <span className="font-bold">分割払いご利用中に解約した場合：</span>
            クレジットカード会社との分割払い契約の解約・精算は各社の規定に基づきます。当社からの返金は上記の考え方に準じて行います。
          </li>
        </ul>
        <span className="block text-xs text-brand-ink/60">
          ※控除対象および返金額の詳細は、解約時点の役務提供状況（教材閲覧・面談実施の有無等）に応じて個別に算定し、契約書面の定めに基づきご案内します。契約書面受領日から8日以内の無条件解約については、下記「クーリング・オフについて（自主解約特約）」によります。
        </span>
      </div>
    ),
  },
  {
    label: 'クーリング・オフについて（自主解約特約）',
    value:
      '本プログラムは通信販売にあたり、法律上のクーリング・オフ制度の適用はありません。ただし当社は、消費者保護の観点から自主基準として、契約書面を受領した日から起算して8日間は、書面または電磁的記録によるお申し出により、無条件で解約（お支払い済み受講料の全額返金）を承ります。詳細は契約書面に記載します。',
  },
  {
    label: '返品・交換・キャンセルについて',
    value:
      '上記の中途解約および自主解約特約の定めによります。デジタルコンテンツ等の性質上、これらの定めの範囲を超える返金・キャンセルはお受けできない場合があります。',
  },
  {
    label: '表現及び商品に関する注意書き',
    value:
      '本プログラムはスキル習得を目的とした教育サービスであり、収入・案件獲得・特定の成果を保証するものではありません。効果には個人差があり、記載の成果・体験談等は個人の実績であって、同様の成果を保証するものではありません。',
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
            制定日：2026年7月4日　／　改定日：2026年7月6日　／　株式会社たびびと
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
