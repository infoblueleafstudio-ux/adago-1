import { mcGet } from '@/lib/microcms';
import type { ListResponse, News } from '@/lib/schema';

type Params = { params: { id: string } };

export async function generateStaticParams(): Promise<{ id: string }[]> {
  try {
    const data = await mcGet<ListResponse<News>>('news', { limit: 100 });
    return data.contents.map((n) => ({ id: n.id }));
  } catch {
    return [];
  }
}

export const revalidate = 3600;

export default async function NewsDetailPage({ params }: Params) {
  let item: News | null = null;
  try {
    item = await mcGet<News>(`news/${params.id}`);
  } catch {
    item = null;
  }

  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-4">記事が見つかりませんでした</h1>
        <p className="text-gray-600">しばらくしてから再度お試しください。</p>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose prose-sky">
      <h1>{item.title}</h1>
      <p className="text-sm text-gray-500">{item.date} {item.category && ` / ${item.category}`}</p>
      {item.image?.url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.image.url} alt={item.title} width={item.image.width} height={item.image.height} />
      )}
      <div dangerouslySetInnerHTML={{ __html: item.body ?? '' }} />
    </article>
  );
}


