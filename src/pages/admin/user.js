import { useEffect, useState } from "react"
import { alignPropType } from "react-bootstrap/esm/DropdownMenu"
import { useHistory } from "react-router"
import { DeleteUser, GetClients } from "../../networks/Api"

export default function Client() {
let history=useHistory()    

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

function DeleteCutsomerAcc(id) {


DeleteUser(id).then((data)=>{
console.log(data)
alert('the User deleted..')
history.push('/dash/')
}).catch((err)=>{
console.log(err)
})

}

return(<>

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
<button className='prod_btn g' onClick={()=>DeleteCutsomerAcc(data._id)} > Delete</button>
</td>


</tr>)
})}


    </table>
</div>

</div>




</>)
}