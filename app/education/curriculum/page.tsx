import PageHeader from '@/components/templates/PageHeader';
import TabLayout, { TabItem } from '@/components/templates/TabLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CurriculumPage() {
  const age3Content = (
    <div className="space-y-6">
      <Card className="border-sky-100">
        <CardHeader>
          <CardTitle>3歳児クラスの目標</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            園生活に慣れ、安心して過ごせるようになることを目指します。基本的な生活習慣を身につけ、友達や先生との関わりを楽しみます。
          </p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">主な活動</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                自由遊び（ブロック、ままごと、お絵かきなど）
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                リズム遊び、手遊び歌
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                簡単な製作活動（クレヨン、シール、のりなど）
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                絵本の読み聞かせ
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const age4Content = (
    <div className="space-y-6">
      <Card className="border-sky-100">
        <CardHeader>
          <CardTitle>4歳児クラスの目標</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            友達との関わりを深め、協力して遊ぶ楽しさを知ります。自分の気持ちを言葉で表現する力を育て、様々な活動に積極的に取り組みます。
          </p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">主な活動</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                集団遊び（鬼ごっこ、ボール遊びなど）
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                絵画・工作（はさみ、絵の具など）
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                英語教室（週1回）
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                体操教室（週1回）
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const age5Content = (
    <div className="space-y-6">
      <Card className="border-sky-100">
        <CardHeader>
          <CardTitle>5歳児クラスの目標</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            小学校入学に向けて、自立心や責任感を育てます。友達と協力して目標を達成する喜びを体験し、思いやりの心を深めます。
          </p>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">主な活動</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                当番活動、係活動
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                文字・数への興味を広げる活動
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                英語教室（週1回）
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                体操教室（週1回）
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 mr-2 flex-shrink-0"></span>
                音楽活動（楽器演奏、合唱など）
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const tabs: TabItem[] = [
    { id: 'age3', label: '3歳児', content: age3Content },
    { id: 'age4', label: '4歳児', content: age4Content },
    { id: 'age5', label: '5歳児', content: age5Content },
  ];

  return (
    <div>
      <PageHeader title="カリキュラム" description="年齢別の教育内容をご紹介します" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TabLayout tabs={tabs} />
      </div>
    </div>
  );
}
