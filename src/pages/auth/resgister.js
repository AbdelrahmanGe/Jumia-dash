import './auth.css'
import {Link, useHistory}from 'react-router-dom'
import { useState } from 'react'
import { Do_register } from '../../networks/Api'

export default function Register() {
let [inputValues, setInputvalues]=useState({
name:'',
email:'',
password:'',
phone:''
})
let history=useHistory()

function Getinput(v) {
    setInputvalues({
        ...inputValues,
        [v.target.name]:v.target.value
    })
}


let [err , setserr]=useState('')
let [emp , setemp]=useState('')
function Sendinfo() {
    
console.log(inputValues)

if(inputValues.name&& inputValues.password && inputValues.phone && inputValues.email !==''){

Do_register(inputValues).then((data)=>{
localStorage.setItem('token',data.data.token)
localStorage.setItem('fullName',data.data.fullName)
localStorage.setItem('email',data.data.email)
alert('Welcome in your new page')
localStorage.setItem('auth','true')
setInputvalues({
name:'',
email:'',
password:'',
phone:'' 
})
setserr(false)
history.push('/dash/')
}).catch((err)=>{

console.log(err)
setserr(true)

})
}else{
alert('please fill data')
}



}

return(<>
<div className='container  center_box' style={{height:'700px'}} >
<div className='form_box'>

<div className='form_title center_box ' >

<h3>Create a new admin account</h3>

</div>

{err===true&&<div class="alert alert-danger" role="alert">
  Something wrong please proivde valid password or email or Fullname
</div>
}


<form>
<input onChange={Getinput}  type='text' value={inputValues.name}  name='name'  placeholder='Full Name'></input>
<input onChange={Getinput}   type='email' name='email' value={inputValues.email}   placeholder='E-mail'></input>
<input  onChange={Getinput}  type='password' name='password' value={inputValues.password}  placeholder='Password'></input>
<input  onChange={Getinput}  type='text' name='phone' value={inputValues.phone}  placeholder='phone'></input>
</form>
<div style={{padding:'20px'}} >
    <p>do you have account? <Link to='/home/login'>login</Link> </p>
</div>
<div className='center_box'>
<button  onClick={Sendinfo} className='form_btn'>Sign up</button>
</div>


</div>
</div>
</>)
}