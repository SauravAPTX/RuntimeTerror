import React, { useEffect, useState } from 'react'
import { SingleProduct } from '../components/SingleProduct';
import './Products.css';

const Products = () => {
    <div>Products</div>
    const api="http://localhost:3000/products";
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const[products,setProducts]=useState([]);
    useEffect(() => {
        async function fetchD() {
          let res = await fetch(api);
          let data = await res.json();
          setProducts(data);
        }
        fetchD();
      }, []);
      const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
    return (
      <div>
      <h1>Products</h1>
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