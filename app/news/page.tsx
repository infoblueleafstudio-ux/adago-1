import PageHeader from '@/components/templates/PageHeader';
import ListDetailLayout, { ListItem } from '@/components/templates/ListDetailLayout';

export default function NewsPage() {
  const newsItems: ListItem[] = [
    {
      id: '1',
      title: '令和7年度 入園説明会のご案内',
      description: '来年度の入園説明会を11月15日(金)に開催いたします。事前予約制となっております。ご希望の方はお電話またはお問い合わせフォームよりご連絡ください。',
      date: '2024.10.01',
      category: 'お知らせ',
    },
    {
      id: '2',
      title: '運動会を開催しました',
      description: '秋晴れの空の下、運動会を開催しました。子どもたちの笑顔がたくさん見られ、保護者の方々にも楽しんでいただけました。',
      date: '2024.09.28',
      category: 'イベント',
    },
    {
      id: '3',
      title: '未就園児クラス「たんぽぽ組」募集中',
      description: '2歳児対象の未就園児クラスの参加者を募集しています。親子で楽しく過ごしましょう。詳しくは子育て支援ページをご覧ください。',
      date: '2024.09.15',
      category: '子育て支援',
    },
    {
      id: '4',
      title: '夏祭りを開催しました',
      description: '園庭で夏祭りを開催しました。ヨーヨー釣りや輪投げなど、たくさんの出店で盛り上がりました。',
      date: '2024.07.20',
      category: 'イベント',
    },
    {
      id: '5',
      title: 'プール開きを行いました',
      description: '今年もプール活動が始まりました。安全に楽しく水遊びを楽しんでいます。',
      date: '2024.07.05',
      category: 'お知らせ',
    },
    {
      id: '6',
      title: 'じゃがいも掘りに行きました',
      description: '近隣の農園でじゃがいも掘りを体験しました。大きなじゃがいもが採れて、子どもたちは大喜びでした。',
      date: '2024.06.15',
      category: 'イベント',
    },
    {
      id: '7',
      title: '父の日参観を実施しました',
      description: 'お父さんと一緒に製作活動を楽しみました。素敵なプレゼントも作りました。',
      date: '2024.06.10',
      category: 'イベント',
    },
    {
      id: '8',
      title: '健康診断を実施しました',
      description: '園医による健康診断を実施しました。全園児が元気に成長しています。',
      date: '2024.05.20',
      category: 'お知らせ',
    },
    {
      id: '9',
      title: 'お花見遠足に行きました',
      description: '近隣の公園にお花見遠足に行きました。桜の下でお弁当を食べ、楽しい時間を過ごしました。',
      date: '2024.04.15',
      category: 'イベント',
    },
  ];

  return (
    <div>
      <PageHeader title="お知らせ" description="園からの最新情報をお届けします" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ListDetailLayout items={newsItems} />
      </div>
    </div>
  );
}
