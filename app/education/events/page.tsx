import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function EventsPage() {
  const events = [
    { month: '4月', season: '春', events: ['入園式', '始業式', 'お花見遠足'] },
    { month: '5月', season: '春', events: ['こどもの日', '保護者参観', '健康診断'] },
    { month: '6月', season: '春', events: ['歯科検診', 'じゃがいも掘り', '父の日参観'] },
    { month: '7月', season: '夏', events: ['七夕まつり', 'プール開き', '夏祭り'] },
    { month: '8月', season: '夏', events: ['夏季保育', 'お泊まり保育（年長）'] },
    { month: '9月', season: '秋', events: ['始業式', '敬老の日', '防災訓練'] },
    { month: '10月', season: '秋', events: ['運動会', 'いも掘り', '秋の遠足'] },
    { month: '11月', season: '秋', events: ['七五三', '作品展', '焼き芋パーティー'] },
    { month: '12月', season: '冬', events: ['発表会', 'クリスマス会', '終業式'] },
    { month: '1月', season: '冬', events: ['始業式', 'もちつき大会', '凧揚げ'] },
    { month: '2月', season: '冬', events: ['節分', '保護者参観', 'お店屋さんごっこ'] },
    { month: '3月', season: '冬', events: ['ひな祭り', 'お別れ遠足', '卒園式'] },
  ];

  const seasonColors: { [key: string]: string } = {
    春: 'from-pink-100 to-rose-100 border-pink-200',
    夏: 'from-sky-100 to-blue-100 border-sky-200',
    秋: 'from-amber-100 to-orange-100 border-amber-200',
    冬: 'from-slate-100 to-gray-100 border-slate-200',
  };

  const seasonBadges: { [key: string]: string } = {
    春: 'bg-pink-100 text-pink-700',
    夏: 'bg-sky-100 text-sky-700',
    秋: 'bg-amber-100 text-amber-700',
    冬: 'bg-slate-100 text-slate-700',
  };

  return (
    <div>
      <PageHeader title="年間行事" description="四季折々の楽しいイベントが盛りだくさんです" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((monthData, index) => (
            <Card key={index} className={`border-2 bg-gradient-to-br ${seasonColors[monthData.season]}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl">{monthData.month}</CardTitle>
                  <Badge variant="secondary" className={seasonBadges[monthData.season]}>
                    {monthData.season}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {monthData.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{event}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
