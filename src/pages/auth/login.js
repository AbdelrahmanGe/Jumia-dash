import { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { Do_login } from '../../networks/Api'

export default function Login() {
    let [inputVal , setInputVal]=useState({
        email:'',
        password:''
    })
let history=useHistory()

function Getvalue(v) {
    setInputVal({
        ...inputVal,
        [v.target.name]:v.target.value
    })
}

let [err , seterr]=useState('')
let [emp , setemp]=useState('')

function SendInfo() {
console.log(inputVal)
if(inputVal.password=='' || inputVal.email===''){
  
inputVal.password===''?setemp('the password is required'):setemp('email is required')
console.log('fdpppp')
seterr(false)
}else{
Do_login(inputVal).then((data)=>{    
    console.log(inputVal)
localStorage.setItem('fullName',data.data.fullName)
localStorage.setItem('token',data.data.token)
localStorage.setItem('auth','true')
setInputVal({
    email:'',
    password:''
})
seterr(false)
alert('welcome in your account !')
history.push('/dash/')


}).catch((err)=>{
seterr(true)
setemp('')
})
}

}


    return(<>
    
    <div className='container  center_box' style={{height:'700px'}} >
<div className='form_box'>

<div className='form_title center_box ' >
<h3>Sign in</h3>
</div>

<form>
{err===true&&<div class="alert alert-danger" role="alert">
  Something wrong please proivde valid password or email
</div>
}
{emp&&<div class="alert alert-danger" role="alert">
  {emp}
</div>
}
<input  type='email'    onChange={Getvalue}   value={inputVal.email} name='email' placeholder='E-mail'></input>
<input  type='password'  onChange={Getvalue}   value={inputVal.password}  name='password'  placeholder='Password'></input>

</form>
<div style={{padding:'20px'}} >
    <p>Don`t have account? <Link to='/home/register'>Register</Link> </p>
</div>
<div className='center_box'>    
<button   onClick={SendInfo}  className='form_btn'>Login</button>
</div>

</div>
</div>
    </>)
    }