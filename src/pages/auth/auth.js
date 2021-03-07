import { useEffect } from 'react';
import React, { Redirect ,Route } from 'react-router-dom'

export default function PrivateRouter({Component,...m}) {
    
let x = false;

useEffect(()=>{
var atuh= localStorage.getItem('auth')
    console.log(Component)
    console.log(atuh)
},[])

return(
<Route  {...m} render={()=>(

localStorage.getItem('auth')=='true' ?<Component></Component>:<Redirect to='/home/login'></Redirect>

)
} ></Route>

)

}