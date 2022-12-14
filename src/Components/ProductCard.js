import React from 'react'

function ProductCard({product, cartIt}) {
  return (
    <div class="product-card">
      <div class="product-image">
        <span class="discount-tag">{product.discount}% off</span>
        <img src={product.image} class="product-thumb" alt="" />
        <button class="card-btn" onClick={() => cartIt(product)}>add to cart</button>
      </div>
      <div class="product-info">
        <h2 class="product-brand">{product.title}</h2>
        <span class="price">${product.price}</span>
        <span class="actual-price">${product.actual}</span>
      </div>
    </div>
  );
}

export default ProductCard