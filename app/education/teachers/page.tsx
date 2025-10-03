import PageHeader from '@/components/templates/PageHeader';
import ListDetailLayout, { ListItem } from '@/components/templates/ListDetailLayout';

export default function TeachersPage() {
  const teachers: ListItem[] = [
    {
      id: '1',
      title: '田中 花子',
      description: '園長として、子どもたち一人ひとりの成長を見守っています。保護者の皆様と共に、子どもたちの笑顔あふれる園生活を支えます。',
      category: '園長',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
    },
    {
      id: '2',
      title: '佐藤 美咲',
      description: '5歳児クラス担任。元気いっぱいの子どもたちと一緒に、毎日楽しく過ごしています。小学校入学に向けて、丁寧に指導します。',
      category: '5歳児担任',
      image: 'https://images.pexels.com/photos/8613314/pexels-photo-8613314.jpeg',
    },
    {
      id: '3',
      title: '鈴木 優子',
      description: '4歳児クラス担任。子どもたちの「できた！」という喜びを大切にし、自信を育てる保育を心がけています。',
      category: '4歳児担任',
      image: 'https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg',
    },
    {
      id: '4',
      title: '山田 真理',
      description: '3歳児クラス担任。初めての集団生活を温かく見守り、安心して過ごせる環境づくりをしています。',
      category: '3歳児担任',
      image: 'https://images.pexels.com/photos/8613318/pexels-photo-8613318.jpeg',
    },
    {
      id: '5',
      title: '高橋 健太',
      description: '体操教室担当。運動を通じて、子どもたちの体力向上と協調性を育てます。',
      category: '体操教師',
      image: 'https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg',
    },
    {
      id: '6',
      title: 'Emily Johnson',
      description: '英語教室担当。歌やゲームを通じて、楽しく英語に親しむ時間を提供しています。',
      category: '英語教師',
      image: 'https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg',
    },
  ];

  return (
    <div>
      <PageHeader title="先生紹介" description="経験豊富な先生方が子どもたちをサポートします" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ListDetailLayout items={teachers} />
      </div>
    </div>
  );
}
