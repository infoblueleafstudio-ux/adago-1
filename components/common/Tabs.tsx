'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export interface TabItem {
  label: string;
  content: string;
  images?: Array<{ url: string; alt?: string; width?: number; height?: number }>;
}

interface TabsProps {
  items: TabItem[];
  title?: string;
  className?: string;
}

export default function Tabs({ items, title, className = '' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`space-y-6 ${className}`}>
      {title && <h3 className="text-2xl font-bold text-gray-900">{title}</h3>}
      
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" role="tablist">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-2 px-1 border-b-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                activeTab === index
                  ? 'border-sky-500 text-sky-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`tab-panel-${index}`}
              id={`tab-${index}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {items.map((item, index) => (
          <div
            key={index}
            id={`tab-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`tab-${index}`}
            className={activeTab === index ? 'block' : 'hidden'}
          >
            <Card>
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
                
                {item.images && item.images.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {item.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={image.url}
                          alt={image.alt || `${item.label} - 画像 ${imageIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
