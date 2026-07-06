import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Threads運用実践プログラム | 株式会社たびびと',
  description:
    'Threadsに特化して、SNS運用代行に必要なスキル（アカウント設計・投稿制作・分析・提案）を実践で学ぶ3か月の教育プログラム。カリキュラム・提供内容・受講料（税込）を掲載しています。',
};

/* ------------------------------------------------------------------ */
/* Content data                                                        */
/* ------------------------------------------------------------------ */

const AUDIENCE = [
  'SNS運用のスキルを体系的に学びたい方（初心者〜中級者）',
  'Threadsの運用スキルを実践的に身につけたい方',
  '提案・営業まで含めて、運用代行の実務スキルを習得したい方',
  '副業など、将来のキャリアの選択肢を見据えてスキルを身につけたい方',
];

const SKILLS: { title: string; desc: string }[] = [
  {
    title: 'アカウント設計',
    desc: 'Threadsのアルゴリズムを理解し、目的から逆算したアカウント設計を身につけます。',
  },
  {
    title: 'リサーチ・分析',
    desc: 'リサーチ、コンセプト設計、KPI設定とデータ分析の進め方を学びます。',
  },
  {
    title: '投稿制作・ライティング',
    desc: '反応の取れる投稿設計とライティング、生成AIを用いた制作を学びます。',
  },
  {
    title: '提案・営業',
    desc: '運用代行の提案・営業に必要な実務スキルを習得します。',
  },
];

const CURRICULUM: {
  no: string;
  title: string;
  desc: string;
  tag?: string;
}[] = [
  {
    no: '準備編',
    title: 'ツールセットアップ',
    desc: 'Slack・アカウント開設・スプレッドシート・生成AIの基礎など、学習環境を整えます。',
  },
  {
    no: '第1章',
    title: 'Threadsビジネスの基礎理解',
    desc: 'Threadsを取り巻く環境と、運用の全体像を理解します。',
  },
  {
    no: '第2章',
    title: 'リサーチと戦略設計',
    desc: '市場・競合リサーチからコンセプト設計、KPI設定までを学びます。',
  },
  {
    no: '第3章',
    title: '投稿設計とライティング実践',
    desc: '反応につながる投稿設計・ライティング・生成AIの活用を実践的に学びます。',
  },
  {
    no: '第4章',
    title: '実践トレーニング',
    desc: 'アフィリエイトを題材にした投稿制作の演習（約3週間）。アフィリエイトの仕組みと演習の進め方を学びます。',
    tag: '演習',
  },
  {
    no: '第5章',
    title: 'クライアントワーク実践シミュレーション',
    desc: '模擬ケースを用いて、クライアントワークの流れと進め方を学びます（約2〜3か月）。',
    tag: '模擬シミュレーション',
  },
  {
    no: '第6章',
    title: '営業と受注のスキル',
    desc: '提案・商談・見積・請求などの進め方を学びます。',
  },
  {
    no: '番外編',
    title: '番外編／よくあるご質問',
    desc: 'テンプレート集・AIプロンプト集・添削事例集などの補助教材と、よくあるご質問をまとめています。',
  },
];

const PROVISION: { item: string; detail: string }[] = [
  { item: 'カリキュラム教材（LearningBox）', detail: '準備編＋全6章＋番外編' },
  { item: '個別面談（1on1）', detail: '隔週・全8回 × 各60分' },
  {
    item: 'チャット質疑応答',
    detail:
      '受講期間中／回数：無制限・対応時間：9:00〜22:00・返信目安：1営業日',
  },
  {
    item: '卒業後のチャット相談',
    detail: '修了後30日間／学習内容の振り返りに関するご相談',
  },
  {
    item: '番外編教材',
    detail: 'テンプレート集・AIプロンプト集・添削事例集 等',
  },
];

const FLOW: { title: string; desc: string }[] = [
  { title: 'お申し込み', desc: 'お問い合わせ・お申し込みフォームよりお申し込みください。' },
  { title: '決済・契約', desc: 'お支払い手続きと、契約内容のご確認を行います。' },
  {
    title: '受講案内・開始',
    desc: 'お申し込み後3営業日以内に、受講案内をお送りします。',
  },
  {
    title: '教材受講＋隔週面談',
    desc: '教材での学習と、隔週の個別面談（1on1）を進めます。',
  },
  { title: '修了', desc: '全カリキュラムの修了をもって、受講完了です。' },
];

/* ------------------------------------------------------------------ */
/* Small presentational helpers (server components, no state)          */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="w-8 h-[2px] bg-brand-sky" />
      {children}
      <span className="w-8 h-[2px] bg-brand-sky" />
    </div>
  );
}

function SectionHeading({
  label,
  title,
  lead,
  center = false,
}: {
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? 'text-center flex flex-col items-center' : ''}>
      <Eyebrow>{label}</Eyebrow>
      <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] text-brand-ink">
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-brand-ink/75 leading-loose ${
            center ? 'max-w-2xl' : 'max-w-3xl'
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ThreadsProgramPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      <Header />

      {/* ---------------------------------------------------------- */}
      {/* ① ファーストビュー                                          */}
      {/* ---------------------------------------------------------- */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        {/* soft brand accents */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-brand-sky/15 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-32 w-[26rem] h-[26rem] rounded-full bg-brand-sunset/15 blur-3xl" />

        <div className="section-container relative">
          {/* breadcrumb */}
          <nav className="text-xs md:text-sm text-brand-ink/50" aria-label="パンくずリスト">
            <a href="/" className="hover:text-brand-sunset transition-colors">
              ホーム
            </a>
            <span className="mx-2">/</span>
            <span className="text-brand-ink/70">Threads運用実践プログラム</span>
          </nav>

          <div className="mt-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-mist px-4 py-1.5 text-xs font-bold tracking-widest text-brand-sky-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-sunset" />
                教育サービス（スキル習得講座）
              </span>

              <h1 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black leading-[1.18] tracking-tight text-brand-ink">
                Threadsに特化して、
                <br className="hidden sm:block" />
                SNS運用代行のスキルを
                <br className="hidden sm:block" />
                <span className="text-brand-sunset">実践で身につける3か月。</span>
              </h1>

              <p className="mt-7 text-brand-ink/80 leading-loose max-w-xl">
                業界ではまだ珍しいThreads運用を、アカウント設計・投稿・分析・提案まで体系的に学ぶ実践プログラムです。カリキュラムと隔週の個別面談で、実務に近い演習を通じてスキルの習得を目指します。
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a href="/#contact" className="btn-primary justify-center">
                  プログラムについて相談する
                  <span className="text-lg leading-none">→</span>
                </a>
              </div>

              <p className="mt-6 text-xs text-brand-ink/55 leading-relaxed">
                ※本プログラムはスキル習得を目的とした教育サービスです。収入・案件獲得・特定の成果を保証するものではありません。
              </p>
            </div>

            {/* hero image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/school-1.jpg"
                  alt="Threads運用実践プログラムの学習イメージ"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/25 to-transparent" />
              </div>
            </div>
          </div>

          {/* quick facts */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: '受講期間', v: '3か月' },
              { k: '個別面談', v: '隔週・全8回' },
              { k: 'チャット質疑', v: '回数無制限' },
              { k: '受講形式', v: 'オンライン' },
            ].map((f) => (
              <div
                key={f.k}
                className="rounded-2xl border border-brand-ink/10 bg-white p-5 text-center shadow-sm"
              >
                <div className="text-xs font-bold tracking-widest text-brand-sky-dark">
                  {f.k}
                </div>
                <div className="mt-2 font-display text-xl md:text-2xl font-black text-brand-ink">
                  {f.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* ② こんな方へ                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-brand-mist">
        <div className="section-container">
          <SectionHeading
            label="FOR YOU"
            title="こんな方へ"
            lead="次のような目的をお持ちの方に向けた、実践型の教育プログラムです。"
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {AUDIENCE.map((a) => (
              <div
                key={a}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm"
              >
                <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-brand-sunset text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                <p className="text-brand-ink/85 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* ③ 学べること・到達目標                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <SectionHeading
            label="SKILLS"
            title={
              <>
                受講を通じて
                <span className="text-brand-sunset">習得できるスキル</span>
              </>
            }
            lead="学んで終わりではなく、実務に近い演習を通じて、次のスキルの習得を目指します。"
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {SKILLS.map((s, i) => (
              <div
                key={s.title}
                className="group rounded-[1.75rem] border border-brand-ink/10 bg-brand-mist p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <span className="font-en text-2xl font-bold text-brand-sky">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-black text-brand-ink">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 text-brand-ink/75 leading-loose">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* ④ カリキュラム概要                                          */}
      {/* ---------------------------------------------------------- */}
      <section id="curriculum" className="py-16 md:py-24 bg-brand-mist scroll-mt-24">
        <div className="section-container">
          <SectionHeading
            label="CURRICULUM"
            title="カリキュラム概要"
            lead="基礎理解から投稿制作、実践トレーニング、営業までを段階的に学びます。"
          />

          <div className="mt-12 space-y-4">
            {CURRICULUM.map((c) => {
              const highlighted = Boolean(c.tag);
              return (
                <div
                  key={c.no}
                  className={`grid md:grid-cols-[160px,1fr] gap-4 md:gap-8 rounded-[1.5rem] p-6 md:p-8 shadow-sm ${
                    highlighted
                      ? 'bg-white border-l-4 border-brand-sunset'
                      : 'bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                    <span className="font-en text-sm font-bold tracking-widest text-brand-sky-dark">
                      {c.no}
                    </span>
                    {c.tag && (
                      <span className="inline-flex rounded-full bg-brand-sunset/10 px-3 py-1 text-xs font-bold text-brand-sunset">
                        {c.tag}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-black text-brand-ink">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-brand-ink/75 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-xs text-brand-ink/55 leading-relaxed">
            ※第4章・第5章は、演習および模擬ケースによるシミュレーションです。当社が金銭の発生する案件を提供・保証・割り当てるものではありません。
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* ⑤ 提供内容・サポート（最重要）                               */}
      {/* ---------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <SectionHeading
            label="WHAT'S INCLUDED"
            title="提供内容・サポート"
            lead="教材・面談・チャットサポートの回数と分量です。"
          />

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-brand-ink/10 shadow-sm">
            <dl>
              {PROVISION.map((p, i) => (
                <div
                  key={p.item}
                  className={`grid grid-cols-1 sm:grid-cols-[minmax(0,300px),1fr] gap-1 sm:gap-8 px-6 md:px-10 py-6 ${
                    i !== PROVISION.length - 1 ? 'border-b border-brand-ink/10' : ''
                  }`}
                >
                  <dt className="font-bold text-brand-ink">{p.item}</dt>
                  <dd className="text-brand-ink/80 leading-relaxed">{p.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-brand-mist p-6">
              <div className="text-xs font-bold tracking-widest text-brand-sky-dark">
                提供形式
              </div>
              <p className="mt-2 text-brand-ink/85">
                オンライン（LearningBox／テキスト教材）
              </p>
            </div>
            <div className="rounded-2xl bg-brand-mist p-6">
              <div className="text-xs font-bold tracking-widest text-brand-sky-dark">
                推奨環境
              </div>
              <p className="mt-2 text-brand-ink/85">
                Google Chrome（最新版）／PC・スマートフォンに対応
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* ⑥ 受講の流れ                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-brand-mist">
        <div className="section-container">
          <SectionHeading
            label="FLOW"
            title="受講の流れ"
            lead="受講期間は、お申し込み日から3か月間です。"
          />

          <ol className="mt-12 space-y-4">
            {FLOW.map((step, i) => (
              <li
                key={step.title}
                className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-sm"
              >
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-brand-sky to-brand-sunset text-white flex items-center justify-center font-en font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-black text-brand-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm md:text-base text-brand-ink/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* ⑦ 料金・お支払い                                            */}
      {/* ---------------------------------------------------------- */}
      <section id="price" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="section-container">
          <SectionHeading label="PRICE" title="料金・お支払い" />

          <div className="mt-12 grid lg:grid-cols-12 gap-6">
            {/* price card */}
            <div className="lg:col-span-5">
              <div className="h-full rounded-[2rem] bg-brand-ink text-white p-8 md:p-10 flex flex-col justify-center">
                <div className="text-sm font-bold tracking-widest text-white/70">
                  受講料
                </div>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-display text-5xl md:text-6xl font-black leading-none">
                    600,000
                  </span>
                  <span className="mb-1 text-xl font-bold">円</span>
                </div>
                <div className="mt-2 text-white/70">（税込）</div>
                <div className="mt-6 pt-6 border-t border-white/15 text-sm text-white/80 leading-relaxed">
                  受講期間：お申し込み日から3か月間
                </div>
              </div>
            </div>

            {/* payment details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-2xl border border-brand-ink/10 p-6 md:p-8">
                <h3 className="font-bold text-brand-ink">お支払い方法</h3>
                <ul className="mt-4 space-y-2 text-brand-ink/80 leading-relaxed list-disc pl-5">
                  <li>銀行振込（分割払いは原則3回まで）</li>
                  <li>
                    クレジットカード決済（一括／カード会社での分割払いは、各カード会社へのお申し込みによります）
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-brand-ink/10 p-6 md:p-8">
                <h3 className="font-bold text-brand-ink">受講料以外に必要な費用</h3>
                <ul className="mt-4 space-y-2 text-brand-ink/80 leading-relaxed list-disc pl-5">
                  <li>振込手数料（銀行振込の場合）</li>
                  <li>
                    分割手数料（カード会社での分割払いをご利用の場合、各社の規定によります）
                  </li>
                  <li>受講に伴い発生する実費（発生する場合）</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-brand-mist p-6 md:p-8">
            <p className="text-sm text-brand-ink/75 leading-relaxed">
              ※銀行振込の分割払いは原則3回まで承ります（例：3回払いで総額600,000円／別途、振込手数料が発生します）。クレジットカードでの分割払いをご利用の場合、回数・手数料・支払総額は各カード会社の規定・契約条件によります。お支払い条件・中途解約・返金の詳細は
              <a
                href="/tokutei-shogyo"
                className="mx-1 font-bold text-brand-sky-dark underline underline-offset-4 hover:text-brand-sunset transition-colors"
              >
                特定商取引法に基づく表記
              </a>
              をご確認ください。
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* ⑧ 成果・免責の注記                                          */}
      {/* ---------------------------------------------------------- */}
      <section className="pb-4 bg-white">
        <div className="section-container">
          <div className="rounded-[1.75rem] border border-brand-ink/15 bg-brand-cream p-6 md:p-8">
            <h2 className="font-bold text-brand-ink flex items-center gap-2">
              <span className="text-brand-sunset">●</span>
              成果・免責に関する注記
            </h2>
            <div className="mt-4 space-y-3 text-sm text-brand-ink/75 leading-loose">
              <p>
                本プログラムはスキル習得を目的とした教育サービスであり、収入・案件獲得・特定の成果を保証するものではありません。
              </p>
              <p>
                効果には個人差があります。掲載の成果・体験談等は個人の実績であり、同様の成果を保証するものではありません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* ⑨ CTA（申込・相談）                                         */}
      {/* ---------------------------------------------------------- */}
      <section id="apply" className="relative py-16 md:py-24 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-sky via-brand-sky-dark to-brand-sunset" />
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />

        <div className="section-container relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="section-label !text-white/90 justify-center">
              <span className="w-8 h-[2px] bg-white" />
              CONTACT
              <span className="w-8 h-[2px] bg-white" />
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2]">
              まずは、お気軽にご相談ください。
            </h2>
            <p className="mt-6 text-white/90 leading-loose">
              プログラムの内容や進め方について、疑問やご不安があればお気軽にお問い合わせください。
              <br />
              お申し込みも下記フォームより承ります。
            </p>

            <div className="mt-9 flex justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-ink text-white rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-transform"
              >
                プログラムについて相談する
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>

          {/* pre-application confirmation */}
          <div className="mt-12 max-w-3xl mx-auto rounded-[1.75rem] bg-white/95 p-6 md:p-8 shadow-xl">
            <h3 className="font-bold text-brand-ink">お申し込み前のご確認</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-brand-ink/80">
              <li className="flex justify-between gap-4 border-b border-brand-ink/10 py-2">
                <span className="text-brand-ink/60">受講料（税込）</span>
                <span className="font-bold">600,000円</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-brand-ink/10 py-2">
                <span className="text-brand-ink/60">受講期間（提供時期）</span>
                <span className="font-bold">お申し込み日から3か月間</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-brand-ink/10 py-2">
                <span className="text-brand-ink/60 whitespace-nowrap">お支払い時期</span>
                <span className="font-bold text-right">
                  お申し込み時
                  <br />
                  （銀行振込は契約後3営業日以内）
                </span>
              </li>
              <li className="flex justify-between gap-4 border-b border-brand-ink/10 py-2">
                <span className="text-brand-ink/60">キャンセル・返金</span>
                <span className="font-bold">特商法表記に準じます</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-brand-ink/60 leading-relaxed">
              お申し込み前に、上記の分量・支払総額・お支払い時期・提供時期・キャンセル条件を最終確認画面でご確認いただけます。
              <br />
              詳細は
              <a
                href="/tokutei-shogyo"
                className="mx-1 font-bold text-brand-sky-dark underline underline-offset-4 hover:text-brand-sunset transition-colors"
              >
                特定商取引法に基づく表記
              </a>
              および
              <a
                href="/privacy-policy"
                className="mx-1 font-bold text-brand-sky-dark underline underline-offset-4 hover:text-brand-sunset transition-colors"
              >
                プライバシーポリシー
              </a>
              をご確認ください。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
