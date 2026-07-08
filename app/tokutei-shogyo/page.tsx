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
    label: '役務の内容・分量',
    value: (
      <ul className="space-y-1 list-disc pl-5">
        <li>カリキュラム教材（LearningBox）：準備編＋全6章＋番外編</li>
        <li>個別面談（1on1）：全8回 × 各60分</li>
        <li>チャット質疑応答：受講期間中 無制限（対応時間 9:00〜22:00／返信目安 1営業日）</li>
        <li>卒業後のチャット相談：修了後30日間</li>
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
          クーリング・オフ期間（契約書面〔紙面〕の到達日から起算して8日）の経過後は、書面または電磁的方法によるお申し出により、将来に向かって中途解約が可能です。もっとも、本プログラムは教材・動画等のデジタルコンテンツの提供を含む役務であることの性質上、原則として受講料の返金はいたしません。ただし、(1) 当社の責めに帰すべき事由により受講期間中にサポートの提供が途絶えた場合、(2) 当社が提供すべき動画等のコンテンツが提供されなかった場合、(3) その他当社の債務不履行がある場合には、この限りではありません。なお、返金をしない額が、当該解約により当社に通常生ずべき平均的な損害の額を超えるときは、その超える部分を返金します。
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
          ※上記の例外に該当し返金を行う場合の返金額は、解約時点の役務提供状況（教材閲覧・面談実施の有無等）に応じて個別に算定し、契約書面の定めに基づきご案内します。クーリング・オフ期間内の解約については、下記「クーリング・オフについて」によります。
        </span>
      </div>
    ),
  },
  {
    label: 'クーリング・オフについて',
    value:
      '本契約は特定商取引法上のクーリング・オフの対象となります。お客様は、当社所定の契約書面（紙面）が到達した日から起算して8日を経過するまでは、書面又は電磁的記録により、契約の申込みの撤回又は契約の解除（クーリング・オフ）を行うことができます。その効力は、書面を発送し、又は電磁的記録を送信した時に生じます。クーリング・オフがなされた場合、当社は、その撤回・解除に伴う損害賠償又は違約金を請求せず、既に受領した金銭があるときは速やかにその全額を返還します。なお、当社がクーリング・オフに関して不実のことを告げ、又は威迫したことにより、お客様が誤認し又は困惑してクーリング・オフを行わなかった場合には、当社が改めてクーリング・オフができる旨を記載した書面を交付し、お客様がこれを受領した日から起算して8日を経過するまではクーリング・オフができます。詳細は契約書面（クーリング・オフのお知らせ）に記載します。',
  },
  {
    label: '返品・交換・キャンセルについて',
    value:
      '上記のクーリング・オフ及び中途解約・返金の定めによります。デジタルコンテンツ等の性質上、これらの定めの範囲を超える返金・キャンセルはお受けできない場合があります。',
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
            制定日：2026年7月4日　／　改定日：2026年7月8日　／　株式会社たびびと
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
