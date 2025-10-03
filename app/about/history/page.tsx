import PageHeader from '@/components/templates/PageHeader';

export default function HistoryPage() {
  const history = [
    { year: '1975年', event: '愛宕幼稚園 開園' },
    { year: '1985年', event: '園舎増築、定員120名に拡大' },
    { year: '1995年', event: '創立20周年記念式典を挙行' },
    { year: '2005年', event: '新園舎完成、最新設備を導入' },
    { year: '2010年', event: '一時預かり事業を開始' },
    { year: '2015年', event: '創立40周年記念行事を開催' },
    { year: '2020年', event: '子育て支援センター開設' },
    { year: '2024年', event: '創立49周年を迎える' },
  ];

  return (
    <div>
      <PageHeader title="歴史" description="愛宕幼稚園の歩みをご紹介します" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sky-200"></div>
          <div className="space-y-8">
            {history.map((item, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-0 w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xs text-center leading-tight">
                    {item.year}
                  </span>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 border border-sky-100">
                  <p className="text-lg text-gray-900 font-semibold">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
