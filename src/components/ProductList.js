import React, { useMemo } from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, addToCart, cartIds, searchTerm, selectedCategory, theme }) {
  console.log('ProductList rendered');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

      for (let i = 0; i < 1000; i++) Math.random();

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  return (
    <div className="product-grid">
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          inCart={cartIds.has(product.id)}
          theme={theme}
        />
      ))}
    </div>
  );
}

export default React.memo(ProductList);
