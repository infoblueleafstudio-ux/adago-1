import PageHeader from '@/components/templates/PageHeader';
import TimelineLayout from '@/components/templates/TimelineLayout';

export default function DailyLifePage() {
  const schedule = [
    {
      time: '8:00',
      title: '登園・自由遊び',
      description: '元気に登園し、好きな遊びを楽しみます。友達と一緒に園庭や保育室で自由に遊びます。',
    },
    {
      time: '10:00',
      title: '朝の会・設定保育',
      description: 'みんなで朝の挨拶をして、出席確認をします。その後、製作や運動など、クラスごとの活動を行います。',
    },
    {
      time: '11:30',
      title: '給食',
      description: '栄養バランスの取れた温かい給食をみんなで楽しくいただきます。',
    },
    {
      time: '12:30',
      title: '自由遊び',
      description: '食後は再び自由遊びの時間。外遊びや室内遊びを楽しみます。',
    },
    {
      time: '13:30',
      title: '午後の活動',
      description: '絵本の読み聞かせや音楽活動など、落ち着いた活動を行います。',
    },
    {
      time: '14:00',
      title: '帰りの会・降園',
      description: 'みんなで帰りの挨拶をして、楽しかったことを振り返ります。',
    },
    {
      time: '14:00〜',
      title: '預かり保育',
      description: '希望者を対象に18:00まで預かり保育を実施しています。',
    },
  ];

  return (
    <div>
      <PageHeader title="園での1日" description="子どもたちの1日の過ごし方をご紹介します" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <TimelineLayout items={schedule} />
      </div>
    </div>
  );
}
