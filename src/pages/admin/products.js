
  import { useEffect } from "react"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Do_delete, GetProducts } from "../../networks/Api"

export default function AdminProduct() {
    

 
  let [product, setproduct]=useState([

])  
  
useEffect(()=>{
GetProducts().then((data)=>{
console.log(data)
setproduct(data.data)

}).catch((err)=>{
console.log(err)
})

},[])

    

let history=useHistory()
function delateProudct(id) {
 let con= window.confirm('hello')
//let con=confirm('Are sure that you want to delete this product?')
if(con===true){
Do_delete(id).then((data)=>{
console.log(data)
history.push('/dash/')
}).catch((err)=>{
console.log(err)
})
}else{
alert('cancelled')
}
}






return(<>
{/*

<div className='container center_box'>

<div className='user_box' >

<div className='title_stack' >
<h1># Products</h1>
</div>

<div className='card_user header_user' style={{backgroundColor:'darksalmon'}} >
<div className='col-lg-5' ><h5>name</h5></div>
<div className='col-lg-1' ><h5>Price</h5></div>
<div  className='col-lg-3' ><h5>Category</h5></div>
<div  className='col-lg-3' ><h5>Action</h5></div>

</div>


{product&&product.map((item,index)=>{

return(
<div key={index} className='card_user'>
<div className='col-lg-5' ><h5>{item.name}</h5></div>
<div className='col-lg-1'><h5>${item.price}</h5></div>

<div  className='col-lg-3' ><h5>{item.category}</h5></div>

<div  className='col-lg-3' >
<Link className='btn btn-primary' to={{pathname:`/dash/edit/${item._id}` , state:item}}   > edit</Link>
<button className='btn btn-danger' onClick={()=>delateProudct(item._id)} > delete</button>
</div>

</div>
)



})}
</div>
</div>
*/}


<div className='container-fluid'>
<div className='title_head' ><h1>#Products</h1></div>
<div className='order_table'>
    <table>
        <tr className='tb_h'>    
  <th>   Product Name     </th>
  <th>    Price     </th>
  <th>    Category</th>
  <th>    In Stock        </th>
  <th>    Rating     </th>
  <th>    Action   </th>
        </tr>
{product&&product.map((data , index)=>{
return(<tr key={index}>
<td>{data.name}</td>
<td>{data.price}</td>
<td>{data.category}</td>
<td>{data.countInStock}</td>
<td> <p className='rat'>{data.rating}</p> </td>
<td>
<Link className='prod_btn' to={{pathname:`/dash/edit/${data._id}` , state:data}}   > Update</Link>
<button className='prod_btn gre' onClick={()=>delateProudct(data._id)} > Delete</button>
</td>
</tr>)
})}


    </table>
</div>

</div>








    </>)
    }