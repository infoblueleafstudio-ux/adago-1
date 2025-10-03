import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TemporaryCarePage() {
  return (
    <div>
      <PageHeader title="一時預かり" description="急な用事にも対応できる一時預かり保育" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <Card className="border-sky-100">
            <CardHeader>
              <CardTitle className="text-2xl">一時預かりについて</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                保護者の方の急な用事や通院、リフレッシュなどの際に、お子様をお預かりするサービスです。
                在園児以外の方もご利用いただけます。
              </p>
            </CardContent>
          </Card>

          <Card className="border-sky-100">
            <CardHeader>
              <CardTitle className="text-2xl">対象年齢</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">満1歳〜就学前のお子様</p>
            </CardContent>
          </Card>

          <Card className="border-sky-100">
            <CardHeader>
              <CardTitle className="text-2xl">実施日時</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">実施日</h4>
                <p className="text-gray-600">月曜日〜金曜日（祝日・園の休園日を除く）</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">時間</h4>
                <p className="text-gray-600">9:00〜17:00の間</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-100">
            <CardHeader>
              <CardTitle className="text-2xl">利用料金</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-sky-100">
                  <span className="font-semibold text-gray-900">4時間まで</span>
                  <span className="text-gray-600">2,000円</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sky-100">
                  <span className="font-semibold text-gray-900">8時間まで</span>
                  <span className="text-gray-600">3,500円</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900">給食（希望者のみ）</span>
                  <span className="text-gray-600">300円</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-100">
            <CardHeader>
              <CardTitle className="text-2xl">ご利用方法</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-500 text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">事前登録</p>
                    <p className="text-sm">初回利用時に登録が必要です。園にお問い合わせください。</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-500 text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">予約</p>
                    <p className="text-sm">利用希望日の3日前までにお電話でご予約ください。</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-500 text-white text-sm font-semibold mr-3 flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">当日</p>
                    <p className="text-sm">必要な持ち物をご持参の上、お越しください。</p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-sky-100 bg-sky-50">
            <CardHeader>
              <CardTitle className="text-2xl">持ち物</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  着替え（2〜3組）
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  オムツ・おしりふき（必要な方）
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  飲み物（水筒）
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  タオル・ハンカチ
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  上履き
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
