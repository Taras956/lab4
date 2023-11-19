import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ProductData from './productData';

import './style.css';

const Product = () => {
  const [detail, setDetail] = useState([]);

  const detailPage = (product) => {
    setDetail([product]);
  };

  return (
    <>
      <div className='detail_container'>
        <div className='detail_contant'>
  
          {detail.map((x) => (
            <div className='detail_info' key={x.id}>
              <div className='img-box'>
                <img src={x.img} alt={x.Title}></img>
              </div>
              <div className='product_detail'>
                <h2>{x.Title}</h2>
                <h3>{x.Price}</h3>
                <p>{x.Des}</p>
                <button>Add to card</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Container>
        <div className='container'>
          {ProductData.map((curElm) => (
            <div className='box' key={curElm.id}>
              <div className='content'>
                <div className='img-box'>
                  <img src={curElm.img} alt={curElm.Title} />
                </div>
                <div className='detail'>
                  <div className='info'>
                    <h3>{curElm.Title}</h3>
                    <p>{`$${curElm.Price}`}</p>
                  </div>
                  <button onClick={() => detailPage(curElm)}>View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Product;