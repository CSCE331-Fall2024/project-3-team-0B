import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MenuDisplayProps {
  menuItems: { [key: string]: string[] };
  onAddToOrder: (item: string) => void;
}

const MenuDisplay: React.FC<MenuDisplayProps> = ({ menuItems, onAddToOrder }) => (
  <Tabs defaultValue="combos">
    <TabsList>
      {Object.keys(menuItems).map((category) => (
        <TabsTrigger key={category} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </TabsTrigger>
      ))}
    </TabsList>
    {Object.entries(menuItems).map(([category, items]) => (
      <TabsContent key={category} value={category}>
        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <Button key={item} onClick={() => onAddToOrder(item)} variant="outline">
              {item}
            </Button>
          ))}
        </div>
      </TabsContent>
    ))}
  </Tabs>
);

export default MenuDisplay;
