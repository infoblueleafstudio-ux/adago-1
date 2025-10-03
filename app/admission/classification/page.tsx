import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ClassificationPage() {
  return (
    <div>
      <PageHeader title="認定区分" description="幼稚園の認定区分についてご説明します" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <Card className="border-sky-100">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Badge className="bg-sky-500">1号認定</Badge>
                <CardTitle className="text-2xl">教育標準時間認定</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">対象</h4>
                <p className="text-gray-600">満3歳以上の教育を希望される方</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">利用時間</h4>
                <p className="text-gray-600">平日 9:00〜14:00（標準4時間）</p>
                <p className="text-sm text-gray-500 mt-1">※預かり保育を利用することで18:00まで延長可能</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">特徴</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                    幼児教育を中心とした保育
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                    夏休み・冬休み・春休みあり
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                    預かり保育（有料）を利用可能
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-100">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Badge className="bg-emerald-500">新2号認定</Badge>
                <CardTitle className="text-2xl">施設等利用給付認定</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">対象</h4>
                <p className="text-gray-600">保護者の就労等により保育が必要な方</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">利用時間</h4>
                <p className="text-gray-600">平日 9:00〜14:00 + 預かり保育利用</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">特徴</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 flex-shrink-0"></span>
                    預かり保育料の一部が無償化の対象
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 flex-shrink-0"></span>
                    月額上限11,300円まで補助
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-2 flex-shrink-0"></span>
                    認定には就労証明書等が必要
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-100 bg-sky-50">
            <CardHeader>
              <CardTitle className="text-2xl">無償化について</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                令和元年10月より、幼児教育・保育の無償化が実施されています。
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  3歳〜5歳児クラスの利用料が無償
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  給食費、教材費、行事費等は実費負担
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  満3歳（3歳になった日から）も無償化の対象
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
