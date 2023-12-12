import React, {useEffect, useState} from 'react';
import './products.css';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
    .then(res => {
      setProducts(res.data);
    })
  }, [products]);

  return(
    <div>
      <h1>Product List</h1>
      <div className='main'>
        {products.map((product) => {
          return(
            <div className='card'>
              <h3>{product.title}</h3>
              <img src={product.thumbnail} />
              <h5>{product.description}</h5>
              <p>Price: Rs.{product.price}</p>
            </div>
          )
        })}
      </div>
      <p>{products.length}</p>
    </div>
  )
}

export default ProductList;