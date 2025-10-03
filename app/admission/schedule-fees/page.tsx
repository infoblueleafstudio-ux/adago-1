import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ScheduleFeesPage() {
  return (
    <div>
      <PageHeader title="保育時間・料金" description="保育時間と費用についてご案内します" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <Card className="border-sky-100">
            <CardHeader>
              <CardTitle className="text-2xl">保育時間</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">通常保育</h4>
                <p className="text-gray-600">平日 9:00〜14:00</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">預かり保育</h4>
                <p className="text-gray-600">早朝 8:00〜9:00</p>
                <p className="text-gray-600">午後 14:00〜18:00</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">休園日</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                    土曜日・日曜日・祝日
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                    夏季休業（8月上旬〜中旬）
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                    冬季休業（12月下旬〜1月上旬）
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                    春季休業（3月下旬〜4月上旬）
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-100">
            <CardHeader>
              <CardTitle className="text-2xl">入園時の費用</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-sky-100">
                  <span className="font-semibold text-gray-900">入園料</span>
                  <span className="text-gray-600">50,000円</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sky-100">
                  <span className="font-semibold text-gray-900">施設費</span>
                  <span className="text-gray-600">30,000円</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900">制服・用品代</span>
                  <span className="text-gray-600">約40,000円</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-100">
            <CardHeader>
              <CardTitle className="text-2xl">月額費用</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-sky-100">
                  <span className="font-semibold text-gray-900">保育料</span>
                  <span className="text-gray-600">無償</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sky-100">
                  <span className="font-semibold text-gray-900">給食費</span>
                  <span className="text-gray-600">6,000円/月</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sky-100">
                  <span className="font-semibold text-gray-900">教材費</span>
                  <span className="text-gray-600">1,500円/月</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sky-100">
                  <span className="font-semibold text-gray-900">バス代（利用者のみ）</span>
                  <span className="text-gray-600">3,500円/月</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900">父母会費</span>
                  <span className="text-gray-600">500円/月</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-100">
            <CardHeader>
              <CardTitle className="text-2xl">預かり保育料金</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-sky-100">
                  <span className="font-semibold text-gray-900">早朝（8:00〜9:00）</span>
                  <span className="text-gray-600">200円/回</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sky-100">
                  <span className="font-semibold text-gray-900">午後（14:00〜16:00）</span>
                  <span className="text-gray-600">400円/回</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-sky-100">
                  <span className="font-semibold text-gray-900">午後（14:00〜18:00）</span>
                  <span className="text-gray-600">700円/回</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900">月極（月〜金）</span>
                  <span className="text-gray-600">12,000円/月</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                ※新2号認定の方は預かり保育料の一部が補助されます
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
