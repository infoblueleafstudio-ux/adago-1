import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">送信完了</h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            お問い合わせありがとうございます。<br />
            内容を確認の上、3営業日以内にご連絡いたします。
          </p>
          
          <div className="space-y-4">
            <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-sky-900 mb-2">今後の流れ</h2>
              <ul className="text-sm text-sky-800 space-y-1 text-left">
                <li>• お問い合わせ内容の確認</li>
                <li>• 担当者からのご連絡（3営業日以内）</li>
                <li>• 必要に応じて詳細なご相談</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600">
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  トップページに戻る
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">新しいお問い合わせ</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
