import React, { useMemo } from 'react';

function ProductCard({ product, addToCart, inCart, theme }) {
  console.log(`ProductCard ${product.name} rendered`);

  const calculatedValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      result += product.price * 0.0001;
    }
    return result.toFixed(2);
  }, [product.price]);

  return (
    <div className={`product-card ${theme}`}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p style={{ fontSize: '10px', opacity: 0.5 }}>
        Calc: {calculatedValue}
      </p>

      <button disabled={inCart} onClick={() => addToCart(product)}>
        {inCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default React.memo(ProductCard);
