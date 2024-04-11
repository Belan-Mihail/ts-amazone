import {  Container, Nav, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container >
            <Navbar.Brand>TSAmazon</Navbar.Brand>
          </Container>
          <Nav>
            <a href='/cart' className='nav-link'>Cart</a>
            <a href='/signin' className='nav-link'>SignIn</a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-4'>
          <Outlet />
        </Container>
      
      </main>
      <footer>
        <div className='text-center'>
          All right reserved
        </div>
        
      </footer>
    </div>
  )
}

export default App


// 3 ass map list of products and add styles to main app.css. Then install react-bootstrap and go main.tsx
// 5 add navbar
// main tsx add react-router-dom

