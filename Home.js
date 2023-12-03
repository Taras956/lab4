import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox';
import { Container, Button, Card, CardGroup } from 'react-bootstrap';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementsToShow: 3,
      allElements: data.slice(0, 3), // Початкові елементи
    };
  }

  handleViewMore = () => {
    // Збільшити кількість елементів для відображення при кожному натисканні
    const newElements = data.slice(
      this.state.allElements.length,
      this.state.allElements.length + 3
    );
    this.setState((prevState) => ({
      elementsToShow: prevState.elementsToShow + 3,
      allElements: [...prevState.allElements, ...newElements],
    }));
  };

  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Наша книга</h2>
          <CardGroup className='m-4'>
            {this.state.allElements.map((item, index) => (
              <Card key={index}>
                <Card.Img variant="top" src={item.imageSrc} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant='primary'>Про книгу</Button>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
          <Button variant='secondary' onClick={this.handleViewMore}>
            Дивитися більше
          </Button>
        </Container>
      </>
    );
  }
}

// Додайте дані для книг (URLs та описи)
const data = [
  {
    imageSrc: 'https://images.pexels.com/photos/4654083/pexels-photo-4654083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Назва книги 1',
    description: 'Опис книги 1',
  },
  {
    imageSrc: 'https://images.pexels.com/photos/226612/pexels-photo-226612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Назва книги 2',
    description: 'Опис книги 2',
  },
  {
    imageSrc: 'https://images.pexels.com/photos/4654082/pexels-photo-4654082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Назва книги 3',
    description: 'Опис книги 3',
  },
  {
    imageSrc: 'https://images.pexels.com/photos/4654083/pexels-photo-4654083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Назва книги 1',
    description: 'Опис книги 1',
  },
  {
    imageSrc: 'https://images.pexels.com/photos/226612/pexels-photo-226612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Назва книги 2',
    description: 'Опис книги 2',
  },
  {
    imageSrc: 'https://images.pexels.com/photos/4654082/pexels-photo-4654082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Назва книги 3',
    description: 'Опис книги 3',
  },  {
    imageSrc: 'https://images.pexels.com/photos/4654083/pexels-photo-4654083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Назва книги 1',
    description: 'Опис книги 1',
  },
  {
    imageSrc: 'https://images.pexels.com/photos/226612/pexels-photo-226612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Назва книги 2',
    description: 'Опис книги 2',
  },
  {
    imageSrc: 'https://images.pexels.com/photos/4654082/pexels-photo-4654082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Назва книги 3',
    description: 'Опис книги 3',
  },
  // і так далі...
];