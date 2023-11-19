import React, {Component} from 'react'
import CarouselBox from '../components/CarouselBox'
import { Container, Button, Card, CardGroup } from 'react-bootstrap'

export default class Home extends Component{
    render(){
        return(
          <>
            <CarouselBox/>
            <Container>
                <h2 className='text-center m-4'>Our book</h2>
                <CardGroup className='m-4'>
                    <Card>
                        <Card.Img
                            variante="top"
                            src="https://images.pexels.com/photos/4654083/pexels-photo-4654083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <Card.Body>
                            <Card.Title>Books</Card.Title>
                            <Card.Text>
                            But eyes are blind. You have to look with the heart
                            </Card.Text>
                            <Button variant='primary'>About book</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variante="top"
                            src="https://images.pexels.com/photos/226612/pexels-photo-226612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <Card.Body>
                            <Card.Title>Books</Card.Title>
                            <Card.Text>
                            The adventures first, explanations take such a dreadful time
                            </Card.Text>
                            <Button variant='primary'>About book</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img
                            variante="top"
                            src="https://images.pexels.com/photos/4654082/pexels-photo-4654082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <Card.Body>
                            <Card.Title>Books</Card.Title>
                            <Card.Text>
                            Woman is sacred; the woman one loves is holy
                            </Card.Text>
                            <Button variant='primary'>About book</Button>
                        </Card.Body>
                    </Card>
                    
                </CardGroup>
            </Container>
          </>
        )
    }
}