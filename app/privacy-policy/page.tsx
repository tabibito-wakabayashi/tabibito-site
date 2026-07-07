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
                <li>お客様及びユーザーの管理、本人確認、受講契約の締結・履行のため</li>
                <li>講座・教材の提供、個別面談・チャットサポート等のサービス運営のため</li>
                <li>当社サービスまたはウェブサイトの運営上必要な事項の通知（電子メールによるものを含む）</li>
                <li>アンケートの実施、及びお客様満足度・サービス品質の向上のため</li>
                <li>当社サービスに関する広告・宣伝、ご案内の送信（電子メールによるものを含む）</li>
                <li>メールマガジンの送信</li>
                <li>受講料の計算・請求、及び入金の確認のため</li>
                <li>各種問い合わせ、アフターサービス対応</li>
                <li>マーケティングデータの調査・分析、新たなサービスの開発のため</li>
                <li>技術問題の究明やサービスの品質向上</li>
                <li>契約や法律等に基づく権利の行使や義務の履行</li>
              </ul>
              <p className="mt-4 text-sm text-brand-ink/70">
                ※電子メールによる広告・宣伝またはメールマガジンの送信は、あらかじめ同意をいただいた方に対してのみ行います。配信を希望されない場合は、各メールに記載する配信停止（オプトアウト）の手続き、または下記「5. お問い合わせ窓口」へのご連絡により、いつでも配信を停止できます。
              </p>

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

              <h3 className="mt-8 font-bold text-brand-ink">（1）個人情報の管理・安全管理措置について</h3>
              <p className="mt-4">
                当社は、ユーザーの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、次の安全管理措置を講じ、個人情報の厳重な管理を行います。
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>
                  <span className="font-bold">組織的安全管理措置：</span>
                  個人情報の取扱いに関する責任者を定めるとともに、取扱い状況を確認できる体制を整備し、個人情報の取扱いに関する規程等に基づいて運用したうえで、必要に応じて点検・見直しを行います。
                </li>
                <li>
                  <span className="font-bold">人的安全管理措置：</span>
                  個人情報の適正な取扱いに関する留意事項について、従業者に対し必要な教育・周知を行います。
                </li>
                <li>
                  <span className="font-bold">物理的安全管理措置：</span>
                  個人情報を取り扱う機器・電子媒体・書類等の管理、及び権限を有しない者による個人情報の閲覧の防止等の措置を講じます。
                </li>
                <li>
                  <span className="font-bold">技術的安全管理措置：</span>
                  個人情報を取り扱う情報システムへのアクセス制御、不正アクセスの防止、通信経路の暗号化等の措置を講じます。
                </li>
                <li>
                  <span className="font-bold">外的環境の把握：</span>
                  外部サービス（学習管理システム〔LearningBox〕・アクセス解析ツール等）を利用して個人情報を取り扱う場合には、当該サービスを提供する事業者が個人情報を取り扱う国・地域における個人情報の保護に関する制度を把握したうえで、適切な安全管理措置を講じます。
                </li>
              </ul>

              <h3 className="mt-10 font-bold text-brand-ink">（2）個人情報の第三者提供</h3>
              <p className="mt-4">
                当社が収集した個人情報は、次の場合をのぞき、第三者に提供または開示することはしません。
              </p>
              <ul className="mt-4 space-y-2 list-disc pl-6">
                <li>あらかじめ本人の同意を得た場合</li>
                <li>個人情報保護法27条1項各号に定める例外に該当する場合</li>
                <li>
                  個人情報保護法27条2項（オプトアウト（ただし、要配慮個人情報は除く））、および同条5項各号（外部委託、事業承継もしくは共同利用）の場合
                </li>
                <li>
                  会社の権利を守るため、または訴訟手続き、裁判所命令、および法的手続きに遵守するために当社が必要と判断した場合
                </li>
                <li>採用活動のため、人材紹介会社等に氏名、電話番号、役職などの基本的な個人情報の提供を行う場合</li>
              </ul>

              <h3 className="mt-10 font-bold text-brand-ink">（3）個人情報の取扱いに関する委託</h3>
              <p className="mt-4">
                当社は、当社が取得する個人情報の取扱いの一部または全部を、上記「2. 個人情報の利用目的」にて定める利用目的のために、外部に委託することがあります。この場合、当社は委託先に対して必要かつ適切な監督を行います。
              </p>

              <h3 className="mt-10 font-bold text-brand-ink">（4）Cookie・アクセス解析ツールについて</h3>
              <p className="mt-4">
                当社のウェブサイトでは、サービスの利便性向上、利用状況の分析、および広告配信の最適化等を目的として、Cookie（クッキー）および類似の技術を使用する場合があります。Cookieは、ウェブサイトの利用状況を記録する仕組みであり、それ単体で特定の個人を識別するものではありません。
              </p>
              <p className="mt-4">
                当社は、ウェブサイトの利用状況を把握するため、Googleアナリティクス等のアクセス解析ツールを利用する場合があります。これらのツールはCookieを使用してトラフィックデータを収集しますが、収集される情報は匿名で収集されており、個人を特定するものではありません。
              </p>
              <p className="mt-4">
                利用者は、ご利用のブラウザの設定によりCookieの受け取りを拒否し、または警告を表示させることができます。Cookieを無効化した場合、当社ウェブサイトの一部の機能がご利用いただけない場合がありますので、あらかじめご了承ください。
              </p>

              <h4 className="mt-8 font-bold text-brand-ink">外部送信される利用者情報について（電気通信事業法第27条の12）</h4>
              <p className="mt-4">
                当社のウェブサイトでは、利用状況の把握・分析等のため、以下の外部事業者が提供するツールを利用しています。これらのツールにより、利用者の端末から当該外部事業者に対して、利用者に関する情報が送信される場合があります。送信先事業者・送信される情報・利用目的等は次のとおりです。
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-sm">
                  <thead>
                    <tr className="bg-brand-mist text-left text-brand-ink">
                      <th className="border border-brand-ink/15 px-3 py-2 font-bold">送信先事業者名／ツール</th>
                      <th className="border border-brand-ink/15 px-3 py-2 font-bold">送信される情報</th>
                      <th className="border border-brand-ink/15 px-3 py-2 font-bold">利用目的</th>
                      <th className="border border-brand-ink/15 px-3 py-2 font-bold">無効化（オプトアウト）</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-brand-ink/15 px-3 py-2 align-top">
                        Google LLC<br />
                        （Googleアナリティクス）
                      </td>
                      <td className="border border-brand-ink/15 px-3 py-2 align-top">
                        Cookie識別子、閲覧ページのURL・タイトル、リファラー、IPアドレス、ブラウザ・OS・端末に関する情報、閲覧日時・滞在時間等の利用状況に関する情報
                      </td>
                      <td className="border border-brand-ink/15 px-3 py-2 align-top">
                        ウェブサイトの利用状況の測定・分析、及びサービスの改善
                      </td>
                      <td className="border border-brand-ink/15 px-3 py-2 align-top">
                        ブラウザのCookie設定、または「Googleアナリティクス オプトアウト アドオン」により無効化できます。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-brand-ink/70">
                送信先事業者における情報の取扱いについては、各事業者のプライバシーポリシー（Google社：
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-sky-dark hover:text-brand-sunset transition-colors underline underline-offset-2"
                >
                  https://policies.google.com/privacy
                </a>
                ）をご確認ください。なお、利用するツールを追加・変更した場合は、本項目を更新します。
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

            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-brand-ink border-l-4 border-brand-sunset pl-4">
                5. お問い合わせ窓口
              </h2>
              <p className="mt-6">
                個人情報の取扱いに関するお問い合わせ、ご意見、ご相談、および保有個人データの開示等のご請求は、下記の窓口までご連絡ください。
              </p>

              <div className="mt-8 p-6 md:p-8 rounded-2xl bg-brand-mist">
                <p className="font-bold text-brand-ink">■ お問い合わせ・開示請求 宛先</p>
                <p className="mt-4 font-bold text-brand-ink">株式会社たびびと 個人情報お問い合わせ窓口</p>
                <p className="mt-3">代表者：代表取締役 若林 真也</p>
                <p className="mt-1">所在地：〒150-0002 東京都渋谷区渋谷3-2-4 帝都青山第2ビルBIZcomfort渋谷南4F-01</p>
                <p className="mt-1">メールアドレス：info@tabibito.site</p>
                <p className="mt-1">
                  電話番号：080-2622-7535（受付時間：平日10:00〜18:00／土日祝を除く）
                </p>
              </div>
            </section>

            <div className="text-right text-sm text-brand-ink/60 space-y-1">
              <p>制定日：2026年7月4日</p>
              <p>最終改定日：2026年7月7日</p>
              <p>株式会社たびびと</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
