import { useState } from 'react';
import {
  Home,
  TableIcon,
  DoorClosed,
  Package,
  Columns3,
  Armchair,
  CircleDot,
  Archive,
  Box,
  Sofa,
  BookOpen,
  Library
} from 'lucide-react';

const categories = [
  { name: 'Tutti', icon: Home },
  { name: 'Armadi', icon: DoorClosed },
  { name: 'Divani', icon: Sofa },
  { name: 'Tavoli', icon: TableIcon },
  { name: 'Set Tavoli/Sedie', icon: TableIcon },
  { name: 'Credenze', icon: Columns3 },
  { name: 'Comò', icon: Package },
  { name: 'Consolle', icon: Archive },
  { name: 'Sedie', icon: CircleDot },
  { name: 'Poltrone', icon: Armchair },
  { name: 'Scrittoio', icon: BookOpen },
  { name: 'Librerie', icon: Library },
  { name: 'Vetrinette', icon: Box },
  { name: 'Cassapanche', icon: Archive },
];

interface SidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <aside className="fixed top-0 right-0 h-screen w-64 pt-24 px-6 overflow-y-auto z-40">
      <h3 className="text-2xl font-serif text-amber-500 mb-8">Categorie</h3>

      <nav className="space-y-4">
        {categories.map((category) => {
          const isActive = selectedCategory === category.name;

          return (
            <button
              key={category.name}
              onClick={() => onSelectCategory(category.name)}
              className={`w-full text-left transition-all duration-300 pb-1 text-lg ${
                isActive
                  ? 'text-white border-b-2 border-orange-500'
                  : 'text-stone-300 border-b border-transparent hover:text-stone-100'
              }`}
            >
              <span className="font-light">{category.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
