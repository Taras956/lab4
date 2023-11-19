import React, {Component} from 'react';
import {Navbar, Nav, FormControl, Container, NavbarToggle, Button, Form} from "react-bootstrap";
import logo from './logo4.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'

export default class Header extends Component{
    render(){
        return(
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="60"
                            width="100"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <NavbarToggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                        </Nav>
                        <Form inline className='ml-auto' >
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contacts" element={<Contacts/>} />
             </Routes>
            </Router>
            </>
        )
    }
}