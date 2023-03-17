import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function NavigationBar() {
  const getData=useSelector((state)=>state.Cart.carts)

  return (
    <>
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#">My Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/products/listP" className={'nav-link'} style={({isActive})=>({textDecoration : isActive ? 'underline':'none'})}>Products</NavLink>
                    <NavLink to="/products/add" className={'nav-link'} style={({isActive})=>({textDecoration : isActive ? 'underline':'none'})}>Add Product</NavLink>
                    <NavLink to="/products/cart" className={'nav-link'} style={({isActive})=>({textDecoration : isActive ? 'underline':'none'})}>Panier({getData.length})</NavLink>
                    {/* <NavLink>Add Product</NavLink> */}

                {/* <Nav.Link as={NavLink}href="#home">Home</Nav.Link> */}
                {/* <Nav.Link href="#link">Link</Nav.Link> */}
                
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavigationBar