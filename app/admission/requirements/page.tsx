import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, FileText, Info } from 'lucide-react';

export default function RequirementsPage() {
  return (
    <div>
      <PageHeader title="募集要項" description="入園に関する詳細情報をご案内します" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <Card className="border-sky-100">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">募集人数</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-sky-100">
                <span className="font-semibold text-gray-900">3歳児（年少）</span>
                <span className="text-gray-600">40名</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-sky-100">
                <span className="font-semibold text-gray-900">4歳児（年中）</span>
                <span className="text-gray-600">若干名</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-semibold text-gray-900">5歳児（年長）</span>
                <span className="text-gray-600">若干名</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-100">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">募集スケジュール</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">入園説明会</h4>
                <p className="text-gray-600">10月15日（日）10:00〜11:30</p>
                <p className="text-sm text-gray-500 mt-1">※要予約</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">願書配布</h4>
                <p className="text-gray-600">10月15日（日）〜</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">願書受付</h4>
                <p className="text-gray-600">11月1日（水）9:00〜12:00</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">面接日</h4>
                <p className="text-gray-600">11月5日（日）</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-100">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">必要書類</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  入園願書
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  入園検定料 5,000円
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  住民票の写し
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  健康診断書（入園決定後）
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-sky-100 bg-sky-50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">ご注意事項</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  説明会へのご参加は事前予約が必要です
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  願書受付は先着順となります
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                  園の見学は随時受け付けております（要予約）
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
