import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Users, MapPin, Clock } from 'lucide-react';

export default function OverviewPage() {
  const info = [
    { icon: Building, label: '園名', value: '愛宕幼稚園' },
    { icon: Users, label: '定員', value: '120名（各学年40名）' },
    { icon: MapPin, label: '所在地', value: '〒123-4567 東京都○○区○○ 1-2-3' },
    { icon: Clock, label: '開園時間', value: '平日 8:00〜18:00' },
  ];

  return (
    <div>
      <PageHeader title="園概要" description="愛宕幼稚園の基本情報をご案内します" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-sky-100 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">基本情報</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {info.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start space-x-4 pb-6 border-b last:border-b-0 border-sky-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    <div className="text-lg font-semibold text-gray-900">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">園長挨拶</h2>
          <div className="bg-white rounded-lg shadow-sm border border-sky-100 p-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              愛宕幼稚園のホームページをご覧いただき、ありがとうございます。
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              当園は、子どもたち一人ひとりの個性を大切にし、心身ともに健やかな成長をサポートすることを理念としています。
              広い園庭と充実した設備の中で、子どもたちは毎日元気いっぱいに活動しています。
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              経験豊富な教職員が、温かく丁寧な保育を心がけ、保護者の皆様と共に子どもたちの成長を見守ります。
            </p>
            <p className="text-gray-600 leading-relaxed">
              ぜひ一度、園の見学にお越しください。お待ちしております。
            </p>
            <div className="mt-8 text-right">
              <p className="text-gray-900 font-semibold">園長 田中 花子</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
