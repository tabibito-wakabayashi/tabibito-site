import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 株式会社たびびと',
  description: '株式会社たびびとのプライバシーポリシー（個人情報保護方針）のページです。',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      <Header />

      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="section-container max-w-4xl">
          <div className="section-label">
            <span className="w-8 h-[2px] bg-brand-sky" />
            PRIVACY POLICY
            <span className="w-8 h-[2px] bg-brand-sky" />
          </div>
          <h1 className="section-title mt-4">プライバシーポリシー</h1>

          <div className="mt-12 md:mt-16 space-y-14 text-brand-ink/85 leading-loose">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-brand-ink border-l-4 border-brand-sunset pl-4">
                1. 個人情報保護方針
              </h2>
              <p className="mt-6">
                株式会社たびびと（以下、「当社」とします。）は、個人情報が個人の重要な財産であり、かつこれを保護することが当社の重大な責務であることに鑑み、法令及びその他の規範に則り、個人情報の利用目的を明示し、個人情報を適切に取得・利用・提供し、個人情報の保護のための管理体制と仕組みの構築を整備し、その継続的改善に努めます。
              </p>
              <p className="mt-6">具体的な個人情報保護基本方針は次の通りです。</p>
              <ul className="mt-6 space-y-4 list-disc pl-6">
                <li>
                  個人情報保護に関する法令、国が定める指針、その他の規範を遵守します。個人情報の利用目的を明示し、適切に個人情報の取得、利用および提供を行います。取得した個人情報は、法令で定める場合を除き、明示した利用目的の範囲内でのみ利用します。
                </li>
                <li>
                  個人情報の利用目的を明示し、適切に個人情報の取得、利用および提供を行います。取得した個人情報は、法令で定める場合を除き、明示した利用目的の範囲内でのみ利用します。
                </li>
                <li>取得した個人情報は、法令で定める場合を除き、本人の同意なしに第三者への提供は行いません。</li>
                <li>個人情報保護に関して、組織的、物理的、人的、技術的に適切な対策を実施し、安全管理措置を行います。</li>
                <li>個人情報保護に関するルールを策定、周知し、個人情報を適切に取り扱うよう教育、啓発を行います。</li>
                <li>個人情報の取り扱い、管理体制および取り組みに関する点検を実施し、継続的に改善・見直しを行います。</li>
                <li>個人情報の取り扱いを外部委託する際には、適格性を十分に審査し、情報管理を徹底するよう指導、監督します。</li>
                <li>
                  本人の求めによる個人情報の開示、訂正、追加、削除、もしくは利用目的の通知を法令に従い行うとともに、ご意見、ご相談に関して適切に対応します。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-brand-ink border-l-4 border-brand-sunset pl-4">
                2. 個人情報の利用目的
              </h2>
              <p className="mt-6">
                当社は、収集した個人情報を以下の利用目的または別途お知らせすることがある利用目的の範囲内で利用させていただきます。当社への個人情報のご提供は任意ですが、ご提供頂けない場合にはお問い合わせへの対応を含めご提供できないサービスもございますのであらかじめご了承ください。
              </p>
              <p className="mt-6">
                なお、当社の権利を守るため、または訴訟手続き、裁判所命令、および法的手続きに遵守するために当社が必要と判断した場合、取得した個人情報を利用することがあります。
              </p>

              <h3 className="mt-10 font-bold text-brand-ink">（1）お客様またはユーザーに関する個人情報</h3>
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>お客様及びユーザー管理のため</li>
                <li>キャンペーン・懸賞企画、アンケートの実施</li>
                <li>当社サービスまたはウェブサイトの運営上必要な事項の通知（電子メールによるものを含む）</li>
                <li>当社商品等の広告・宣伝、販売の勧誘（電子メールによるものを含む）</li>
                <li>メールマガジンの送信</li>
                <li>商品等の梱包・発送業務</li>
                <li>課金計算、料金請求</li>
                <li>ポイントサービスの提供</li>
                <li>会員及びユーザーが投稿した情報の掲載</li>
                <li>各種問い合わせ、アフターサービス対応</li>
                <li>マーケティングデータの調査・分析、新たなサービス開発・業務提携企業に提供する統計資料作成</li>
                <li>技術問題の究明やサービスの品質向上</li>
                <li>契約や法律等に基づく権利の行使や義務の履行</li>
              </ul>

              <h3 className="mt-10 font-bold text-brand-ink">（2）採用選考応募者に関する個人情報</h3>
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>採用選考および事務連絡のため</li>
                <li>採用活動に関する情報を提供するため</li>
              </ul>

              <h3 className="mt-10 font-bold text-brand-ink">
                （3）従業者および退職者ならびにそのご家族に関する個人情報
              </h3>
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>人事管理（入社管理、人事異動、昇級・昇格の評価、休職・退職管理、キャリアパス、出向、従業員教育）</li>
                <li>労務管理、給与管理（勤怠管理、給与・賞与の支払い、個人番号関係事務）</li>
                <li>
                  経営管理（リスクマネジメント、クライシスマネジメント、プライバシーマネジメント、コンプライアンスマネジメント、監査・認証対応等）
                </li>
                <li>IT管理（各種電子機器等の支給・管理）</li>
                <li>財務管理（財務戦略、経費精算、その他の財務関連手続等）</li>
                <li>福利厚生（雇用保険、健康保険、厚生年金保険、維持管理、その他の福利厚生）</li>
                <li>健康管理（定期健康診断およびストレスチェックの実施、結果の保管・管理、長期欠勤者への対応）</li>
                <li>営業・広報（営業活動および採用等の広報活動）</li>
                <li>総務（郵便物管理、文書管理）</li>
                <li>その他の当社の事業活動（各種連絡等）</li>
                <li>法令上の要求事項への対応（源泉徴収、年末調整）</li>
              </ul>

              <h3 className="mt-10 font-bold text-brand-ink">
                （4）委託先、ビジネスパートナー、その他協力会社の従業者に関する個人情報
              </h3>
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>良好な取引関係の維持・管理</li>
                <li>関連取引および業務の実施のため</li>
                <li>イベントの企画および主催のため</li>
                <li>取引に付随する支払いおよび関連手続きのため</li>
              </ul>

              <h3 className="mt-10 font-bold text-brand-ink">
                （5）当社および当社製品・サービス等に対する問い合わせ・各種請求（以下、「お問い合わせ等」と言います）をされた方に関する個人情報
              </h3>
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>お問い合わせ等への対応</li>
                <li>お問い合わせ等対応内容の記録・管理のため</li>
                <li>お問い合わせ等対応のサービス向上のため</li>
              </ul>

              <h3 className="mt-10 font-bold text-brand-ink">
                （6）他の事業者等から個人情報の取り扱い業務を委託された場合に取得した個人情報
              </h3>
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>委託された業務の遂行</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-brand-ink border-l-4 border-brand-sunset pl-4">
                3. 個人情報の取扱
              </h2>

              <h3 className="mt-8 font-bold text-brand-ink">（1）個人情報の管理について</h3>
              <p className="mt-4">
                当社は、ユーザーの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。
              </p>

              <h3 className="mt-10 font-bold text-brand-ink">（2）個人情報の第三者提供</h3>
              <p className="mt-4">
                当社が収集した個人情報は、次の場合をのぞき、第三者に提供または開示することはしません。
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>あらかじめ本人の同意を得た場合</li>
                <li>個人情報保護法23条1項1号ないし4号に定める例外に該当する場合</li>
                <li>
                  個人情報保護法23条2項（オプトアウト（ただし、要配慮個人情報は除く））ないし同5項1号ないし3号（外部委託、事業継承もしくは共同利用）の場合
                </li>
                <li>
                  会社の権利を守るため、または訴訟手続き、裁判所命令、および法的手続きに遵守するために当社が必要と判断した場合
                </li>
                <li>
                  当社プラットフォーム等を経由して商品販売等を行うビジネスパートナーに対し、商品購入者の商品郵送先の住所、氏名、電話番号などの基本的な個人情報の提供を行う場合
                </li>
                <li>採用活動のため、人材紹介会社等に氏名、電話番号、役職などの基本的な個人情報の提供を行う場合</li>
              </ul>

              <h3 className="mt-10 font-bold text-brand-ink">（3）個人情報の共同利用</h3>
              <p className="mt-4 font-bold">■ 個人情報の項目</p>
              <ul className="mt-2 space-y-2 list-disc pl-6">
                <li>氏名、住所、生年月日、家族の人数、電話番号、メールアドレス、職業その他のプロフィール</li>
                <li>
                  その他利用目的を達成するために必要な個人情報（①当社が取得した情報、②外部から取得した情報、並びに③①及び②を組み合わせた情報を含む）
                </li>
              </ul>
              <p className="mt-6 font-bold">■ 管理責任者</p>
              <p className="mt-2">株式会社たびびと</p>

              <h3 className="mt-10 font-bold text-brand-ink">（4）個人情報の取扱いに関する委託</h3>
              <p className="mt-4">
                当社は、当社が取得する個人情報の取扱いの一部または全部を、上記「2.個人情報の利用目的」にて定める利用目的のために、外部に委託することがあります。
              </p>

              <h3 className="mt-10 font-bold text-brand-ink">（5）匿名加工情報の取扱い</h3>
              <p className="mt-4">
                当社は、匿名加工情報を一部業務において取り扱う場合があります。匿名加工情報の取り扱いにおいては、本人の権利利益に配慮し、かつ法令等の定めに従い、適正な取扱いを確保するために必要な措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-brand-ink border-l-4 border-brand-sunset pl-4">
                4. 保有個人データの開示等の請求
              </h2>
              <p className="mt-6">
                当社では、取得する個人情報のうち、「保有個人データ」（当社が、開示、内容の訂正、追加または削除、利用の停止、消去および第三者への提供の停止を行うことのできる権利を有する個人データ）について、利用目的の通知、開示、内容の訂正、追加もしくは削除、利用の停止もしくは消去、または第三者への提供の停止（以下、「開示等」という。）の請求に法令等に則り対応します。（法令等に従い、対応をお断りする場合もございますのであらかじめご了承ください。）
              </p>

              <h3 className="mt-10 font-bold text-brand-ink">保有個人データの開示等の請求手続き</h3>
              <p className="mt-4">
                下記の宛先に、本人確認書類（①運転免許証、パスポート、健康保険証、各種年金手帳、写真付住民基本台帳カード、外国人登録証明書、身体障害者手帳、いずれかの写し、または②30日以内に作成された個人番号の記載のない住民票の原本）を添付の上、郵送にてご請求ください。代理人による請求の場合には、ご本人確認書類の他、法定代理人であることが確認できる書類（法定代理人である場合）または委任状（委任による代理の場合）も同封ください。
              </p>
              <p className="mt-6">
                開示等の請求にあたり、手数料はいただきませんが、当社に請求いただく際の郵送料などは請求者様においてご負担くださいませ。受領いたしました請求書は当社において確認させて頂き、法令等及び当社規程に則ってご対応いたします。
              </p>

              <div className="mt-10 p-6 md:p-8 rounded-2xl bg-brand-mist">
                <p className="font-bold text-brand-ink">■ 宛先</p>
                <p className="mt-3">東京都渋谷区渋谷3-2-4</p>
                <p className="mt-1">株式会社たびびと</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
