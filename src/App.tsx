import { useState, useRef } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Tutti');
  const productsRef = useRef<HTMLDivElement>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setTimeout(() => {
      productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-stone-950">
      <Sidebar selectedCategory={selectedCategory} onSelectCategory={handleCategorySelect} />
      <div className="pr-64">
        <Hero />
        <Stats />
        <Products selectedCategory={selectedCategory} ref={productsRef} />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
