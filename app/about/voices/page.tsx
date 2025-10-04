import PageHeader from '@/components/templates/PageHeader';
import ListDetailLayout, { ListItem } from '@/components/templates/ListDetailLayout';
import { mcGet } from '@/lib/microcms';
import type { ListResponse, Voice } from '@/lib/schema';

export const revalidate = 3600;

export default async function VoicesPage() {
  let items: ListItem[] = [];
  try {
    const data = await mcGet<ListResponse<Voice>>('voices', { orders: '-id', limit: 24 });
    items = data.contents.map((v) => ({
      id: v.id,
      title: v.name ?? (v.type === '保護者' ? '保護者の声' : '卒園生の声'),
      description: v.body,
      category: v.type,
      image: v.image?.url,
    }));
  } catch {
    items = [
      { id: '1', title: 'ダミー感想', description: 'ダミー本文', category: '保護者の声' },
    ];
  }

  return (
    <div>
      <PageHeader title="卒園生・保護者の声" description="愛宕幼稚園での思い出をお聞かせいただきました" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ListDetailLayout items={items} basePath="/about/voices" />
      </div>
    </div>
  );
}
