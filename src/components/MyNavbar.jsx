import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function MyNavbar() {
    return <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#browse">Browse</Nav.Link>
        </Nav>
    </Navbar>
}