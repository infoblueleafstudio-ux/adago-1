import PageHeader from '@/components/templates/PageHeader';
import ListDetailLayout, { ListItem } from '@/components/templates/ListDetailLayout';
import { mcGet } from '@/lib/microcms';
import type { ListResponse, Teacher } from '@/lib/schema';

export const revalidate = 3600;

export default async function TeachersPage() {
  let items: ListItem[] = [];
  try {
    const data = await mcGet<ListResponse<Teacher>>('teachers', { orders: 'role', limit: 24 });
    items = data.contents.map((t) => ({
      id: t.id,
      title: t.name,
      description: t.profile ?? '',
      category: t.role,
      image: t.image?.url,
    }));
  } catch {
    items = [
      { id: '1', title: 'ダミー先生', description: 'プロフィール', category: '担任' },
    ];
  }

  return (
    <div>
      <PageHeader title="先生紹介" description="経験豊富な先生方が子どもたちをサポートします" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ListDetailLayout items={items} basePath="/education/teachers" />
      </div>
    </div>
  );
}
