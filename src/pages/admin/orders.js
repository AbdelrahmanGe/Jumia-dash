import { useEffect, useState } from "react"
import { GetOrders } from "../../networks/Api"

export default function  AdminOrder   () {
    

let [orders, setorders]=useState([


])

useEffect(()=>{
GetOrders().then((data)=>{
setorders([...data.data])
console.log(data)
}).catch((err)=>{
console.log(err)

})

},[])


return(<>

{/*
<div className='container-fluid center_box'>
<div className='user_box' >
<div className='card_user header_user' style={{backgroundColor:'coral'}}>
<div className='col-lg-3' ><h5> Order id      </h5></div>
<div className='col-lg-3' ><h5> product       </h5></div>
<div  className='col-lg-3' ><h5>Custome      </h5></div>
<div  className='col-lg-3' ><h5>date delivery</h5></div>
<div  className='col-lg-3' ><h5>price         </h5></div>
<div  className='col-lg-3' ><h5>payment method </h5></div>
<div  className='col-lg-3' ><h5>action         </h5></div>
</div>


{orders&&orders.map((client,index)=>{

return(
<div key={index} className='card_user'>
<div className='col-lg-5' ><h5>{client.orderItems.name}</h5></div>
<div className='col-lg-2' ><h5>{client.orderItems.price} </h5></div>
<div className='col-lg-2' ><h5>{client.shippingAddress.country}</h5></div>
<div className='col-lg-2' ><h5>8</h5></div>
</div>
)



})}
</div>

</div>
*/}



<div className='container-fluid'>

<div className='title_head' ><h1>#Orders</h1></div>

<div className='order_table'>
    <table>
        <tr className='tb_h'>
                
  <th>    Product      </th>
  <th>    Customer      </th>
  <th>    Date delivery</th>
  <th>    Price        </th>
  <th>    Payment metho</th>
  <th>    Action       </th>
        </tr>
{orders&&orders.map((data , index)=>{
return(<tr key={index}>
<td>{data.orderItems[0].name}</td>
<td>{data.shippingAddress.firstName}</td>
<td>{data.createdAt}</td>
<td>{data.totalPrice}</td>
<td>{data.paymentMethod}</td>
<td>***</td>

</tr>)
})}


    </table>
</div>

</div>

</>)
}