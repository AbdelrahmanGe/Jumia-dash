import { Link, Route ,Switch, useHistory } from "react-router-dom";
import Board from "./board";
import AdminOrder from "./orders";
import AdminProduct from "./products";
import './admin.css'
import Client from "./user";
import Profile from "./profile";
import { Nav } from "react-bootstrap";
import Edit from "./edit";
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import { useEffect } from "react";
import { useState } from "react";
import logo from '../../imgs/1.png'
import Loading from "../../load";
export default function AdminDashboard() {


let history= useHistory()

    function Logout() {
      localStorage.setItem('auth','false')
      history.push('/home/login')
    }

let [local , setlocal]=useState('')

    useEffect(()=>{
let lo=localStorage.getItem('email')
setlocal(lo)
    },[])

    return(<>
<div  className='container-fluid admin'>
  <div className='nav_admin'>


<div className='row'>
  <div className='col-lg-2'>
<div className='nav_hidden'>
<Dropdown className='up'>
  <Button >Menu</Button>
  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
  <Dropdown.Menu className='show_up'>
  <li className="nav-item">
    <Link className="nav-link" to='/dash/'>My dashboard </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/dash/product'> Products </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to='/dash/order'>Orders</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to='/dash/client'> Clients</Link>
  </li>
  <Dropdown.Item><Link style={{color:'black'}} to='/home/'>Home</Link></Dropdown.Item>
    <Dropdown.Item onClick={Logout} >Log Out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>



</div>



  </div>
<div className='col-lg-6 col-a-10'>
<img src={logo} style={{width:'40%'}}></img>

</div>
  <div className='col-lg-4 center_box drop'>
  <Dropdown>
  <Button variant="success">{local}</Button>
  <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
  <Dropdown.Menu>
    <Dropdown.Item >Action</Dropdown.Item>
    <Dropdown.Item><Link style={{color:'black'}} to='/home/'>Home</Link></Dropdown.Item>
    <Dropdown.Item onClick={Logout} >Log Out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </div>
   </div>

  </div>




<div className='row'>
<div className='col-lg-3 media-col'>
  <div className='sidebar' >
<ul className="nav flex-column">
<li className="nav-item">
  <h1 style={{color:"white"}} >Admin</h1>
  </li>
<li className="nav-item">
    <Link className="nav-link" to='/dash/'>My dashboard </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/dash/product'> Products </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link" to='/dash/order'>Orders</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to='/dash/client'> Clients</Link>
  </li>
</ul>




</div>
</div>





<div className='col-lg-9 pp'>
<Switch>
<Route path='/dash/' exact component={Board} ></Route>    
<Route path='/dash/product' exact component={AdminProduct} ></Route>
<Route path='/dash/order' exact component={AdminOrder} ></Route>
<Route path='/dash/client' exact component={Client} ></Route>
<Route path='/dash/profile' exact component={Profile} ></Route>
<Route path='/dash/edit/:id' exact component={Edit} ></Route>
</Switch>



</div>





    
    </div>    
    </div>    
    </>)
    }