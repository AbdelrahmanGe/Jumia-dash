import { useState } from "react"

export default function Profile() {
    


let [admin , setAdmin]=useState({
    name:'Abdelrahman',
    Email:'Admin@compony',
    phone:'100020039',
    img:'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
})    

return(<>

<div className='container-fluid'>
<div className='row background_intro'>


</div>
<div className='row p'>
    <div className='col-lg-3'>
<img src={admin.img}style={{width:'100%' , height:'100%'}} className='admin-pic' ></img>

    </div>
    <div className='col-lg-5'>

<h1>{admin.name}</h1>
<h4>{admin.Email}</h4>
<h4>{admin.phone}</h4>
    </div>
    <div className='col-lg-4 center_box'>
<div>
    <button className='btn btn-warning'>Edit Profile</button>
</div>

    </div>
</div>
<hr></hr>


</div>
</>)
}