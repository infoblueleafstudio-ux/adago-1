import Link from 'next/link';
import { Calendar, BookOpen, Heart, CircleHelp as HelpCircle, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mcGet } from '@/lib/microcms';
import type { ListResponse, News } from '@/lib/schema';
import CardComponent from '@/components/common/Card';
import CTA from '@/components/common/CTA';
import AnimateOnScroll from '@/components/common/AnimateOnScroll';
import Hero from './components/Hero';
import StickyContact from './components/StickyContact';
import SectionStrap from './components/SectionStrap';

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
      <Hero useImageHeadline={true} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <div className="flex items-center justify-between mb-12">
            <div>
                <h2 className="text-3xl font-bold text-atago-blue mb-2 tracking-tight">お知らせ</h2>
                <p className="text-atago-text">最新の情報をお届けします</p>
            </div>
              <Button asChild variant="link" className="text-atago-light-blue">
              <Link href="/news" className="flex items-center">
                すべて見る
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latest.map((news, index) => (
              <AnimateOnScroll key={news.id} animation="slide-up" delay={index * 100}>
                <div className="hover-lift">
                  <CardComponent
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
                  </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <SectionStrap 
        title="園のご案内" 
        pills={[
          {label:'10の魅力', href:'/attractions'},
          {label:'施設紹介', href:'/about/facilities'}
        ]} 
      />

      <section className="py-20 bg-atago-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainNavCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <AnimateOnScroll key={card.href} animation="slide-up" delay={index * 100}>
                  <Link href={card.href}>
                    <Card className="h-full hover-lift border-0 shadow-md rounded-xl overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                        <CardTitle className="text-xl text-atago-blue">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-atago-text leading-relaxed">
                        {card.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <SectionStrap 
        title="お問い合わせ" 
        pills={[
          {label:'見学予約', href:'/contact'},
          {label:'資料請求', href:'/contact'}
        ]} 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <CTA />
          </AnimateOnScroll>
        </div>
      </section>

      <StickyContact />
    </div>
  );
}
