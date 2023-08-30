import React, { useEffect, useState } from 'react';
import { SingleProduct } from '../components/SingleProduct';
import './Products.css';

const Products = () => {
  const [sortKey, setSortKey] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const api = "http://localhost:3000/products";
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      let res = await fetch(api);
      let data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, [sortKey, selectedCategory]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const filteredProducts = selectedCategory === ''
    ? products
    : products.filter(product => product.category === selectedCategory);

  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleSort = (key) => {
    let sortedProducts = [...filteredProducts];
    if (key === 'price-low') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (key === 'price-high') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts.sort((a, b) => {
        if (key === 'rating.rate') {
          return b.rating.rate - a.rating.rate;
        }
        return a[key].localeCompare(b[key]);
      });
    }
    setProducts(sortedProducts);
    setSortKey(key);
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="controls">
      <select value={sortKey} onChange={(e) => handleSort(e.target.value)}>
  <option value="">Sort By</option>
  <option value="price-low">Price: Low to High</option>
  <option value="price-high">Price: High to Low</option>
  <option value="rating.rate">Rating</option>
</select>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Baby girl clothing">Baby Girl Clothing</option>
          <option value="Toddler girl clothing">Toddler Girl Clothing</option>
          <option value="Kid girl clothing">Kid Girl Clothing</option>
          <option value="Baby boy clothing">Baby Boy Clothing</option>
          <option value="Toddler boy clothing">Toddler Boy Clothing</option>
          <option value="kid boy clothing">Kid Boy Clothing</option>
          <option value="shoes">Shoes</option>
        </select>
      </div>
      <div className="product-list">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-item">
            <SingleProduct {...product} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
