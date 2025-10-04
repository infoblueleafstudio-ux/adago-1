import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MapPin, Mail } from 'lucide-react';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  phone?: string;
  address?: string;
  mapUrl?: string;
  className?: string;
}

export default function CTA({
  title = 'お問い合わせ',
  description = 'ご質問やご相談がございましたら、お気軽にお問い合わせください。見学も随時受け付けております。',
  primaryButtonText = 'お問い合わせフォーム',
  primaryButtonHref = '/contact',
  secondaryButtonText = '入園案内を見る',
  secondaryButtonHref = '/admission',
  phone = '03-1234-5678',
  address = '東京都渋谷区',
  mapUrl = 'https://www.google.com/maps',
  className = ''
}: CTAProps) {
  return (
    <Card className={`bg-gradient-to-br from-sky-500 to-blue-600 text-white border-0 ${className}`}>
      <CardContent className="p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">{title}</h2>
            <p className="text-sky-50 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-sky-100">お電話でのお問い合わせ</p>
                  <p className="text-2xl font-bold">{phone}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-sky-100">アクセス</p>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-500 rounded"
                  >
                    Google Mapで見る
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <Button asChild size="lg" className="bg-white text-sky-600 hover:bg-sky-50 text-lg py-6">
              <Link href={primaryButtonHref} className="flex items-center justify-center">
                <Mail className="mr-2 w-5 h-5" />
                {primaryButtonText}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg py-6">
              <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
