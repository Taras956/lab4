import React, {Component} from 'react'
import { Carousel } from 'react-bootstrap'
import bookImg from '../assets/book1.jpg'
import book2Img from '../assets/book2.jpg'

export default class CarouselBox extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                     className='d-block w-100'
                     src={bookImg}
                     alt='book'
                    />
                    <Carousel.Caption>
                        <h3>Book store</h3>
                        <p>Choose your book</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     className='d-block w-100'
                     src={book2Img}
                     alt='book'
                    />
                    <Carousel.Caption>
                        <h3>Book store</h3>
                        <p>Choose your book</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}