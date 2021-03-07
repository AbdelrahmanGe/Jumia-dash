import { useEffect, useState } from "react"
import { GetClients } from "../../networks/Api"

export default function Client() {
    

let [users, setuser]=useState([
{firstName:'jason work' , email:'goodwell@gmail.com' , state:'active'},
{firstName:'jason work' , email:'goodwell@gmail.com' , state:'active'},
{firstName:'jason work' , email:'goodwell@gmail.com' , state:'active'},
{firstName:'jason work' , email:'goodwell@gmail.com' , state:'active'}

])

let [user , setcleint]=useState([])

useEffect(()=>{
GetClients().then((data)=>{
setcleint([...data.data])
console.log(data)

}).catch((err)=>{
console.log(err)

})


},[])

return(<>
{/*

<div className='container center_box'>


<div className='user_box' >
<div className='title_stack' >
<h1># Client</h1>
</div>

<div className='card_user header_user '>
<div className='col-lg-4' ><h5>name</h5></div>
<div className='col-lg-4' ><h5>email</h5></div>
<div  className='col-lg-4' ><h5>Phone</h5></div>
</div>


{client&&client.map((client,index)=>{
return(
<div key={index} className='card_user'>
<div className='col-lg-4' ><h5>{client.firstName}</h5></div>
<div className='col-lg-4' ><h5>{client.email} </h5></div>
<div className='col-lg-4' style={{backgroundColor:'whitesmoke'}} ><h5>{client.phone}</h5></div>
</div>
)



})
}

</div>
</div>
*/}


<div className='container-fluid'>
<div className='title_head' ><h1>#Customers</h1></div>
<div className='order_table'>
    <table>
        <tr className='tb_h'>    
  <th>  Customer_ID    </th>
  <th>    Name    </th>
  <th>    Email</th>
  <th>   Phone      </th>
  <th>Action</th>
        </tr>
{user&&user.map((data , index)=>{
return(<tr key={index}>
<td>{data._id.slice(0,10)}</td>   
<td>{data.firstName}</td>
<td>{data.email}</td>
<td>{data.phone}</td>
<td>
<button className='prod_btn gre'  > Delete</button>
</td>


</tr>)
})}


    </table>
</div>

</div>




</>)
}