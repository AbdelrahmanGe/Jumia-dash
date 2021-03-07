import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import './component.css'
import logo from '../imgs/1.png'
export default function HeaderComponent(){


return(<>

<Navbar  className='header_nav'  expand="lg">
  <Navbar.Brand >
    <Link to='/home/'><img src={logo} style={{width:'80%'}} ></img></Link>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

      {localStorage.getItem('auth')!=='true'?'':<Nav.Link>
        <Link to='/dash'>Dashboard</Link>
          </Nav.Link> }
      
      {
        localStorage.getItem('auth')==='true'?'': <><Nav.Link > 
    <Link to='/home/register'> Register </Link>      
     </Nav.Link>

     <Nav.Link>
    <Link to='/home/login'> Login </Link>
     </Nav.Link></>
      }
     

    </Nav>
  </Navbar.Collapse>
</Navbar>

</>)


}