import { mcGet } from '@/lib/microcms';
import type { ListResponse, Voice } from '@/lib/schema';

type Params = { params: { id: string } };

export async function generateStaticParams(): Promise<{ id: string }[]> {
  try {
    const data = await mcGet<ListResponse<Voice>>('voices', { limit: 100 });
    return data.contents.map((n) => ({ id: n.id }));
  } catch {
    return [];
  }
}

export const revalidate = 3600;

export default async function VoiceDetailPage({ params }: Params) {
  let item: Voice | null = null;
  try {
    item = await mcGet<Voice>(`voices/${params.id}`);
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
    <article className="max-w-3xl mx-auto px-4 py-16 prose">
      <h1>{item.name ?? (item.type === '保護者' ? '保護者の声' : '卒園生の声')}</h1>
      <p className="text-sm text-gray-500">{item.type}</p>
      {item.image?.url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.image.url} alt={item.name ?? item.type} width={item.image.width} height={item.image.height} />
      )}
      <div dangerouslySetInnerHTML={{ __html: item.body }} />
    </article>
  );
}


