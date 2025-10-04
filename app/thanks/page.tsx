import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Mail, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ThanksPage() {
  return (
    <div>
      <PageHeader title="お問い合わせありがとうございます" description="お問い合わせが正常に送信されました" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">お問い合わせを受け付けました</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            この度はお問い合わせいただき、誠にありがとうございます。<br />
            内容を確認後、3営業日以内に担当者よりご連絡させていただきます。<br />
            しばらくお待ちください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-sky-100 bg-sky-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-sky-900">今後の流れ</h3>
              </div>
              <ul className="text-sm text-sky-800 space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  お問い合わせ内容の確認
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  担当者からのご連絡（3営業日以内）
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  必要に応じて詳細なご相談
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-sky-100 bg-sky-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-xl font-semibold text-sky-900">緊急時のお問い合わせ</h3>
              </div>
              <p className="text-sm text-sky-800 mb-4">
                お急ぎの場合は、お電話でお問い合わせください。
              </p>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-sky-600 mr-2" />
                <span className="text-sm text-sky-700">平日 9:00〜17:00</span>
              </div>
              <p className="text-lg font-semibold text-sky-900 mt-2">03-1234-5678</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-8 py-6">
              <Link href="/" className="flex items-center">
                <ArrowLeft className="mr-2 w-5 h-5" />
                トップページに戻る
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-sky-500 text-sky-600 hover:bg-sky-50">
              <Link href="/contact">再度お問い合わせする</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
