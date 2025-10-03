import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Users, MessageCircle, Calendar } from 'lucide-react';

export default function SupportPage() {
  const programs = [
    {
      icon: Baby,
      title: '未就園児クラス「たんぽぽ組」',
      age: '2歳児対象',
      description: '親子で楽しく過ごす未就園児クラスです。遊びを通じて、お友達との関わりを学びます。',
      schedule: '毎週火曜日・木曜日 10:00〜11:30',
      fee: '月額 3,000円',
    },
    {
      icon: Users,
      title: '園庭開放',
      age: '0歳〜就学前',
      description: '園庭を開放し、自由に遊んでいただけます。同年代のお友達と遊ぶ機会を提供します。',
      schedule: '毎週水曜日 10:00〜12:00',
      fee: '無料',
    },
    {
      icon: MessageCircle,
      title: '子育て相談',
      age: '全年齢',
      description: '子育ての悩みや不安について、経験豊富な保育士がご相談に応じます。',
      schedule: '平日 9:00〜17:00（要予約）',
      fee: '無料',
    },
    {
      icon: Calendar,
      title: '季節のイベント',
      age: '0歳〜就学前',
      description: '七夕まつり、夏祭り、運動会など、季節ごとのイベントに参加できます。',
      schedule: '年数回開催',
      fee: 'イベントにより異なります',
    },
  ];

  return (
    <div>
      <PageHeader title="子育て支援" description="地域の子育てをサポートします" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            愛宕幼稚園では、在園児のご家庭だけでなく、地域の子育て家庭を支援するため、様々なプログラムを実施しています。
            お気軽にご参加ください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="border-sky-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{program.title}</CardTitle>
                      <p className="text-sm text-sky-600 font-semibold">{program.age}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                  <div className="pt-3 border-t border-sky-100 space-y-2">
                    <div>
                      <span className="text-sm font-semibold text-gray-900">開催日時：</span>
                      <span className="text-sm text-gray-600">{program.schedule}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-900">参加費：</span>
                      <span className="text-sm text-gray-600">{program.fee}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 border-sky-100 bg-gradient-to-br from-sky-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl">ご利用について</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">お申し込み方法</h4>
              <p className="text-gray-600 leading-relaxed">
                各プログラムへの参加をご希望の方は、お電話またはお問い合わせフォームよりご連絡ください。
                初回参加時に簡単な登録が必要です。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">お問い合わせ</h4>
              <p className="text-gray-600">
                TEL: 03-1234-5678<br />
                受付時間: 平日 9:00〜17:00
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
