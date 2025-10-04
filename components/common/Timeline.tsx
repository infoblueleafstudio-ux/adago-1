'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export interface TimelineItem {
  time: string;
  title: string;
  description?: string;
  image?: string;
  alt?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
  className?: string;
}

export default function Timeline({ items, title, className = '' }: TimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {title && <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>}
      <div className="space-y-4">
        {items.map((item, index) => (
          <Card key={index} className="border-l-4 border-sky-500">
            <CardContent className="p-6">
              <button
                onClick={() => toggleExpanded(index)}
                className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 rounded-md p-2 -m-2"
                aria-expanded={expandedItems.has(index)}
                aria-controls={`timeline-content-${index}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-sm font-medium text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                    {item.time}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                </div>
                {expandedItems.has(index) ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div
                id={`timeline-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  expandedItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 space-y-3">
                  {item.image && (
                    <div className="w-full h-48 relative rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt || item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  {item.description && (
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
