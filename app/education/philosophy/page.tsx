import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Smile, Users, Sparkles } from 'lucide-react';

export default function PhilosophyPage() {
  const philosophies = [
    {
      icon: Heart,
      title: '思いやりの心を育む',
      description: '友達を思いやり、助け合う心を大切にし、優しさあふれる子どもを育てます。',
    },
    {
      icon: Smile,
      title: '自主性と創造性を伸ばす',
      description: '子どもたちの「やってみたい」という気持ちを大切にし、自ら考え、行動する力を育みます。',
    },
    {
      icon: Users,
      title: '協調性とコミュニケーション力',
      description: '集団生活の中で、仲間と協力し、コミュニケーションを取る力を養います。',
    },
    {
      icon: Sparkles,
      title: '心身の健やかな成長',
      description: '運動や遊びを通じて、健康な体と豊かな心を育てます。',
    },
  ];

  return (
    <div>
      <PageHeader title="教育理念" description="愛宕幼稚園の教育方針をご紹介します" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <Card className="border-sky-100">
            <CardHeader>
              <CardTitle className="text-2xl text-center">教育目標</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-xl text-gray-700 font-semibold leading-relaxed">
                一人ひとりの個性を大切にし、<br />
                心身ともに健やかな子どもを育てる
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {philosophies.map((philosophy, index) => {
            const Icon = philosophy.icon;
            return (
              <Card key={index} className="border-sky-100">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{philosophy.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{philosophy.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-sky-100">
          <CardHeader>
            <CardTitle className="text-2xl">保育方針</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">1. 子ども中心の保育</h3>
              <p className="text-gray-600 leading-relaxed">
                子どもたちの興味・関心を大切にし、一人ひとりのペースに合わせた保育を行います。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">2. 体験を重視した学び</h3>
              <p className="text-gray-600 leading-relaxed">
                実際に見て、触れて、感じる体験を通じて、豊かな感性と探究心を育みます。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">3. 家庭との連携</h3>
              <p className="text-gray-600 leading-relaxed">
                保護者の皆様と密にコミュニケーションを取り、共に子どもたちの成長を支えます。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
