import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smile, Heart, Users, BookOpen, Sparkles, Sun, TreePine, Palette, Music, Globe } from 'lucide-react';

export default function AttractionsPage() {
  const attractions = [
    {
      icon: Smile,
      title: '笑顔あふれる環境',
      description: '明るく温かい雰囲気の中で、子どもたちが毎日笑顔で過ごせる環境を整えています。',
    },
    {
      icon: Heart,
      title: '心を育む保育',
      description: '思いやりの心や優しさを育み、豊かな感性を持つ子どもを育てます。',
    },
    {
      icon: Users,
      title: '少人数制クラス',
      description: '一人ひとりに目が届く少人数制で、きめ細やかな保育を実施しています。',
    },
    {
      icon: BookOpen,
      title: '充実したカリキュラム',
      description: '年齢に応じた多彩なプログラムで、子どもたちの可能性を広げます。',
    },
    {
      icon: Sparkles,
      title: '清潔で安全な施設',
      description: '最新の設備と徹底した安全管理で、安心して過ごせる環境を提供します。',
    },
    {
      icon: Sun,
      title: '広い園庭',
      description: '思い切り体を動かせる広々とした園庭で、のびのびと遊べます。',
    },
    {
      icon: TreePine,
      title: '自然とのふれあい',
      description: '季節の草花や虫たちとのふれあいを通じて、自然の大切さを学びます。',
    },
    {
      icon: Palette,
      title: '創造力を伸ばす活動',
      description: '絵画や工作など、創造力を育む活動を豊富に取り入れています。',
    },
    {
      icon: Music,
      title: '音楽とリズム遊び',
      description: '歌やリズム遊びを通じて、表現力と協調性を養います。',
    },
    {
      icon: Globe,
      title: '国際感覚を育む',
      description: '英語教育や異文化に触れる機会を設け、グローバルな視野を育てます。',
    },
  ];

  return (
    <div>
      <PageHeader
        title="10の魅力"
        description="愛宕幼稚園が選ばれる理由をご紹介します"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => {
            const Icon = attraction.icon;
            return (
              <Card key={index} className="border-sky-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-sky-600 mb-1">魅力 {index + 1}</div>
                      <CardTitle className="text-xl">{attraction.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{attraction.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
