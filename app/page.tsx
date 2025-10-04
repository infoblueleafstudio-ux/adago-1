import Link from 'next/link';
import { Calendar, BookOpen, Heart, CircleHelp as HelpCircle, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mcGet } from '@/lib/microcms';
import type { ListResponse, News } from '@/lib/schema';
import CardComponent from '@/components/common/Card';
import CTA from '@/components/common/CTA';

export default async function Home() {
  let latest: { id: string; date: string; category?: string; title: string; description?: string; image?: string }[] = [];
  try {
    const data = await mcGet<ListResponse<News>>('news', { orders: '-date', limit: 3 });
    latest = data.contents.map((n) => ({
      id: n.id,
      date: n.date,
      category: n.category,
      title: n.title,
      description: n.body?.slice(0, 120) ?? '',
      image: n.image?.url,
    }));
  } catch (e) {
    latest = [
      { id: '1', date: '2024-10-01', category: 'お知らせ', title: 'ダミー：入園説明会のご案内', description: 'ダミー本文' },
      { id: '2', date: '2024-09-28', category: 'イベント', title: 'ダミー：運動会を開催しました', description: 'ダミー本文' },
      { id: '3', date: '2024-09-15', category: '子育て支援', title: 'ダミー：未就園児クラス募集中', description: 'ダミー本文' },
    ];
  }

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
            {latest.map((news) => (
              <CardComponent
                key={news.id}
                item={{
                  id: news.id,
                  title: news.title,
                  description: news.description || '',
                  date: news.date,
                  category: news.category,
                  image: news.image,
                  href: `/news/${news.id}`,
                  alt: news.title
                }}
              />
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
          <CTA />
        </div>
      </section>
    </div>
  );
}
