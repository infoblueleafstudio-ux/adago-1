'use client';

import { useState } from 'react';
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
}

const ListDetailLayout = ({ items }: ListDetailLayoutProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer border-sky-100">
          {item.image && (
            <div className="w-full h-48 bg-gradient-to-br from-sky-100 to-blue-100 rounded-t-lg overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
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
      ))}
    </div>
  );
};

export default ListDetailLayout;
