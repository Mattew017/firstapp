import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Components/logo192.png'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" fixed='top' expand="lg" variant='dark' sticky='top'>
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img src={logo}
                                height="30"
                                width="30"
                                className='d-inline-block align-top'
                                alt='Logo' />
                            React
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="https://reactjs.org/docs/getting-started.html">Docs</Nav.Link>
                                <Nav.Link href="https://reactjs.org/tutorial/tutorial.html" >Tutorial</Nav.Link>
                                <Nav.Link href="#projects" >Проекты</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Найти</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

