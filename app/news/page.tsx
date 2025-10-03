import PageHeader from '@/components/templates/PageHeader';
import ListDetailLayout, { ListItem } from '@/components/templates/ListDetailLayout';
import { mcGet } from '@/lib/microcms';
import type { ListResponse, News } from '@/lib/schema';

export const revalidate = 3600;

export default async function NewsPage() {
  let items: ListItem[] = [];
  try {
    const data = await mcGet<ListResponse<News>>('news', { orders: '-date', limit: 24 });
    items = data.contents.map((n) => ({
      id: n.id,
      title: n.title,
      description: n.body?.slice(0, 120) ?? '',
      date: n.date,
      category: n.category,
      image: n.image?.url,
    }));
  } catch (e) {
    items = [
      { id: '1', title: 'ダミー：入園説明会のご案内', description: 'ダミー本文', date: '2024-10-01', category: 'お知らせ' },
      { id: '2', title: 'ダミー：運動会を開催しました', description: 'ダミー本文', date: '2024-09-28', category: 'イベント' },
      { id: '3', title: 'ダミー：未就園児クラス募集中', description: 'ダミー本文', date: '2024-09-15', category: '子育て支援' },
    ];
  }

  return (
    <div>
      <PageHeader title="お知らせ" description="園からの最新情報をお届けします" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ListDetailLayout items={items} />
      </div>
    </div>
  );
}
