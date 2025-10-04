'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface ListItem {
  id: string;
  title: string;
  description: string;
  date?: string;
  category?: string;
  image?: string;
}

interface ListDetailLayoutProps {
  items: ListItem[];
  basePath?: string;
}

const ListDetailLayout = ({ items, basePath }: ListDetailLayoutProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link key={item.id} href={basePath ? `${basePath}/${item.id}` : '#'}>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer border-sky-100">
          {item.image && (
            <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
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
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ListDetailLayout;
