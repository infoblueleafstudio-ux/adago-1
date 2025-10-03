import Link from 'next/link';
import { Calendar, BookOpen, Heart, CircleHelp as HelpCircle, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const newsItems = [
    {
      id: 1,
      date: '2024.10.01',
      category: 'お知らせ',
      title: '令和7年度 入園説明会のご案内',
      description: '来年度の入園説明会を11月15日(金)に開催いたします。事前予約制となっております。',
    },
    {
      id: 2,
      date: '2024.09.28',
      category: 'イベント',
      title: '運動会を開催しました',
      description: '秋晴れの空の下、運動会を開催しました。子どもたちの笑顔がたくさん見られました。',
    },
    {
      id: 3,
      date: '2024.09.15',
      category: '子育て支援',
      title: '未就園児クラス「たんぽぽ組」募集中',
      description: '2歳児対象の未就園児クラスの参加者を募集しています。親子で楽しく過ごしましょう。',
    },
  ];

  const mainNavCards = [
    {
      title: '教育と保育',
      description: '理念、園での1日、年間行事、カリキュラム等をご紹介します',
      href: '/education',
      icon: BookOpen,
      color: 'from-sky-400 to-blue-500',
    },
    {
      title: '入園案内',
      description: '募集要項、認定区分、保育時間・料金等の詳細情報',
      href: '/admission',
      icon: Calendar,
      color: 'from-emerald-400 to-green-500',
    },
    {
      title: '子育て支援',
      description: '未就園児向けプログラムや子育て相談のご案内',
      href: '/support',
      icon: Heart,
      color: 'from-pink-400 to-rose-500',
    },
    {
      title: 'よくある質問',
      description: '入園や園生活に関するよくあるご質問',
      href: '/faq',
      icon: HelpCircle,
      color: 'from-amber-400 to-orange-500',
    },
  ];

  return (
    <div>
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            子どもたちの笑顔が<br />あふれる幼稚園
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            一人ひとりの個性を大切に<br />心身ともに健やかな成長をサポートします
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-8 py-6">
              <Link href="/admission">入園案内</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-sky-500 text-sky-600 hover:bg-sky-50">
              <Link href="/attractions">10の魅力</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">お知らせ</h2>
              <p className="text-gray-600">最新の情報をお届けします</p>
            </div>
            <Button asChild variant="link" className="text-sky-600">
              <Link href="/news" className="flex items-center">
                すべて見る
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow cursor-pointer border-sky-100">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-sky-100 text-sky-700">
                      {news.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {news.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">園のご案内</h2>
            <p className="text-gray-600">詳しくはこちらをご覧ください</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainNavCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link key={card.href} href={card.href}>
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-0">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {card.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-sky-500 to-blue-600 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
                  <p className="text-sky-50 mb-8 leading-relaxed">
                    ご質問やご相談がございましたら、お気軽にお問い合わせください。
                    見学も随時受け付けております。
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-sky-100">お電話でのお問い合わせ</p>
                        <p className="text-2xl font-bold">03-1234-5678</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-sky-100">アクセス</p>
                        <a
                          href="https://www.google.com/maps"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-semibold hover:underline"
                        >
                          Google Mapで見る
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-50 text-lg py-6">
                    <Link href="/contact" className="flex items-center justify-center">
                      <Mail className="mr-2 w-5 h-5" />
                      お問い合わせフォーム
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg py-6">
                    <Link href="/admission">入園案内を見る</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
