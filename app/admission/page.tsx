import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Users, Clock, Heart } from 'lucide-react';
import Link from 'next/link';

export default function AdmissionPage() {
  const admissionCards = [
    {
      title: '募集要項',
      description: '入園に関する詳細な募集要項をご確認いただけます。',
      href: '/admission/requirements',
      icon: FileText,
      color: 'from-blue-400 to-blue-500',
    },
    {
      title: '認定区分',
      description: 'お子様の年齢やご家庭の状況に応じた認定区分について',
      href: '/admission/classification',
      icon: Users,
      color: 'from-green-400 to-green-500',
    },
    {
      title: '保育時間・保育料',
      description: '保育時間や保育料の詳細、各種手続きについて',
      href: '/admission/schedule-fees',
      icon: Clock,
      color: 'from-orange-400 to-orange-500',
    },
    {
      title: '一時預かり',
      description: '緊急時や急な用事の際の一時預かりサービスについて',
      href: '/admission/temporary-care',
      icon: Heart,
      color: 'from-pink-400 to-pink-500',
    },
  ];

  const externalLinks = [
    {
      title: '区役所 子育て支援課',
      description: '入園手続きや補助金申請に関する詳細情報',
      url: 'https://www.city.example.com/kosodate',
      category: '行政情報',
    },
    {
      title: '保育園・幼稚園情報サイト',
      description: '地域の保育園・幼稚園の比較情報',
      url: 'https://hoiku.example.com',
      category: '比較サイト',
    },
    {
      title: '入園説明会 申し込み',
      description: 'オンラインでの入園説明会申し込み',
      url: 'https://forms.example.com/admission',
      category: '申し込み',
    },
  ];

  return (
    <div>
      <PageHeader 
        title="入園案内" 
        description="入園に関する詳細情報や手続きについてご案内いたします" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 園内情報 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">園内情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionCards.map((card) => {
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
        </section>

        {/* 外部リンク */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">関連リンク</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-sky-100">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm bg-sky-100 text-sky-700 px-3 py-1 rounded-full">
                      {link.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {link.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      詳細を見る
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* お問い合わせCTA */}
        <section className="mt-16">
          <Card className="bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ご不明な点がございましたら</h3>
              <p className="text-gray-600 mb-6">
                入園に関するご質問やご相談がございましたら、お気軽にお問い合わせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600">
                  <Link href="/contact">お問い合わせフォーム</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="tel:03-1234-5678">03-1234-5678</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
