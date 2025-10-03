'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabLayoutProps {
  tabs: TabItem[];
}

const TabLayout = ({ tabs }: TabLayoutProps) => {
  return (
    <Tabs defaultValue={tabs[0]?.id} className="w-full">
      <TabsList className="grid w-full mb-8" style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="text-base">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="mt-0">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabLayout;
