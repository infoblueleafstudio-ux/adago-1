import Link from 'next/link';
import { Card as UICard, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export interface CardProps {
  id: string;
  title: string;
  description: string;
  date?: string;
  category?: string;
  image?: string;
  href?: string;
  alt?: string;
}

interface CardComponentProps {
  item: CardProps;
  className?: string;
}

export default function Card({ item, className = '' }: CardComponentProps) {
  const cardContent = (
    <UICard className={`hover:shadow-lg transition-shadow cursor-pointer border-sky-100 ${className}`}>
      {item.image && (
        <div className="w-full h-48 bg-gradient-to-br from-sky-100 to-blue-100 rounded-t-lg overflow-hidden relative">
          <Image
            src={item.image}
            alt={item.alt || item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          {item.category && (
            <Badge variant="secondary" className="bg-sky-100 text-sky-700">
              {item.category}
            </Badge>
          )}
          {item.date && <span className="text-sm text-gray-500">{item.date}</span>}
        </div>
        <CardTitle className="text-lg">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 leading-relaxed">
          {item.description}
        </CardDescription>
      </CardContent>
    </UICard>
  );

  if (item.href) {
    return (
      <Link href={item.href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
