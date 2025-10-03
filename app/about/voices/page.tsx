import PageHeader from '@/components/templates/PageHeader';
import ListDetailLayout, { ListItem } from '@/components/templates/ListDetailLayout';

export default function VoicesPage() {
  const voices: ListItem[] = [
    {
      id: '1',
      title: '温かい先生方に感謝',
      description: '先生方がいつも温かく見守ってくださり、子どもも毎日楽しく通園しています。安心して預けられる幼稚園です。',
      category: '保護者の声',
    },
    {
      id: '2',
      title: '友達がたくさんできました',
      description: '少人数制なので、先生の目が行き届き、子どもも友達をたくさん作ることができました。',
      category: '保護者の声',
    },
    {
      id: '3',
      title: '楽しい思い出がいっぱい',
      description: '運動会や発表会など、たくさんの行事があり、子どもの成長を実感できる機会が多くありました。',
      category: '保護者の声',
    },
    {
      id: '4',
      title: '今でも大切な思い出',
      description: '卒園してから10年以上経ちますが、愛宕幼稚園での思い出は今でも心に残っています。素晴らしい環境で育ててもらいました。',
      category: '卒園生の声',
    },
    {
      id: '5',
      title: '人生の基礎を学んだ場所',
      description: '友達との関わり方や思いやりの心など、人生の基礎を愛宕幼稚園で学びました。感謝しています。',
      category: '卒園生の声',
    },
    {
      id: '6',
      title: '自然とのふれあいが魅力',
      description: '園庭での遊びや季節の行事を通じて、自然の大切さを学べたことが良かったです。',
      category: '卒園生の声',
    },
  ];

  return (
    <div>
      <PageHeader title="卒園生・保護者の声" description="愛宕幼稚園での思い出をお聞かせいただきました" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ListDetailLayout items={voices} />
      </div>
    </div>
  );
}
