import PageHeader from '@/components/templates/PageHeader';
import ContactForm from '@/components/forms/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { submitToFormService } from '@/lib/form-service';
import type { FormSubmissionData } from '@/lib/form-service';

export default function ContactPage() {
  const handleFormSubmit = async (data: FormSubmissionData) => {
    await submitToFormService(data);
  };

  return (
    <div>
      <PageHeader title="お問い合わせ" description="ご質問やご相談はお気軽にお問い合わせください" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm onSubmit={handleFormSubmit} />
          </div>

          <div className="space-y-6">
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle className="text-xl">お電話でのお問い合わせ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">電話番号</p>
                    <p className="text-lg font-semibold text-gray-900">03-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">受付時間</p>
                    <p className="text-sm text-gray-900">平日 9:00〜17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle className="text-xl">メールでのお問い合わせ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">メールアドレス</p>
                    <p className="text-sm text-gray-900 break-all">info@atago-kdg.example.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle className="text-xl">所在地</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">
                      〒123-4567<br />
                      東京都○○区○○ 1-2-3
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-md transition-colors"
                >
                  Google Mapで見る
                </a>
              </CardContent>
            </Card>

            <Card className="border-sky-100 bg-sky-50">
              <CardHeader>
                <CardTitle className="text-xl">見学について</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  園の見学は随時受け付けております。事前にお電話またはお問い合わせフォームよりご予約ください。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
