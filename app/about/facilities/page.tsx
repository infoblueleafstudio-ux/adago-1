import PageHeader from '@/components/templates/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FacilitiesPage() {
  const facilities = [
    {
      title: '保育室',
      description: '明るく開放的な保育室には、年齢に応じた遊具や教材を豊富に用意しています。',
      image: 'https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg',
    },
    {
      title: '園庭',
      description: '広々とした園庭には、滑り台やブランコなどの遊具があり、子どもたちがのびのびと遊べます。',
      image: 'https://images.pexels.com/photos/8613178/pexels-photo-8613178.jpeg',
    },
    {
      title: '遊戯室',
      description: '雨の日でも体を動かせる広い遊戯室。行事や発表会にも使用します。',
      image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
    },
    {
      title: '図書コーナー',
      description: '絵本や図鑑が並ぶ図書コーナー。子どもたちが自由に本を楽しめます。',
      image: 'https://images.pexels.com/photos/8613310/pexels-photo-8613310.jpeg',
    },
    {
      title: '給食室',
      description: '栄養バランスを考えた温かい給食を、園内の給食室で調理しています。',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    },
    {
      title: '園バス',
      description: '安全運転を心がけた園バスで、送迎を行っています。',
      image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg',
    },
  ];

  return (
    <div>
      <PageHeader title="施設紹介" description="充実した設備で子どもたちの成長をサポートします" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="border-sky-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-sky-100 to-blue-100">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${facility.image})` }}
                ></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{facility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {facility.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
