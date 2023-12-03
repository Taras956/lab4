import React, { useState } from 'react';
import { Container, Form, FormControl, Button, Card, CardGroup } from 'react-bootstrap';
import ProductData from './productData';
import './style.css';

const Product = () => {
  const [detail, setDetail] = useState([]);
  const [visibleElements, setVisibleElements] = useState(4);
  const [searchText, setSearchText] = useState('');

  const detailPage = (product) => {
    setDetail([product]);
  };

  const showMore = () => {
    setVisibleElements((prevVisibleElements) => prevVisibleElements + 4);
  };

  const handleSearch = () => {
    // Функція фільтрації для пошуку за текстом
    // Встановлює видимі елементи на всі елементи, якщо текст порожній
    const filteredProducts = ProductData.filter((product) =>
      product.Title.toLowerCase().includes(searchText.toLowerCase())
    );

    setVisibleElements(filteredProducts.length);

    // Очищаємо поле вводу після фільтрації
    setSearchText('');
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
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Container>
        <div className='container'>
          {/* Поле вводу та кнопка для пошуку */}
          <Form className="mb-3">
            <FormControl
              type="text"
              placeholder="Пошук за текстом"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button variant="primary" onClick={handleSearch}>
              Пошук
            </Button>
          </Form>

          {/* Карти продуктів */}
          <CardGroup className='m-4'>
            {ProductData.slice(0, visibleElements).map((curElm) => (
              <Card key={curElm.id}>
                <Card.Img variant="top" src={curElm.img} alt={curElm.Title} />
                <Card.Body>
                  <Card.Title>{curElm.Title}</Card.Title>
                  <Card.Text>{`$${curElm.Price}`}</Card.Text>
                  <Button onClick={() => detailPage(curElm)}>View</Button>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>

          {/* Кнопка "Дивитися більше" */}
          <div className="text-center">
            <button onClick={showMore}>Дивитися більше</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Product;