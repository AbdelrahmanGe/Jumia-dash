import { useEffect, useState } from "react"
import { deleteOrder, GetOrders } from "../../networks/Api"

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

let [status ,setStatus]=useState([])
let [colors , setColor]=useState({
cancell:'rgba(255, 0, 0, 0.582)',
confirm:'rgba(79, 226, 21, 0.582)'
})

function delateuser(id,index) {

deleteOrder(id).then((data)=>{
alert('Are you sure ?')
let arr=[...status];
for(let x =0 ; x<orders.length ; x++){
if(x ===index){
 arr[x]='cancelled';   
}   
}

setStatus([
...arr,
])
    }).catch((err)=>{console.log(err)})
}

function coneuser(id,index) {
    alert('Are you sure ?')
    let arr=[...status];
for(let x =0 ; x<orders.length ; x++){
if(x ===index){
 arr[x]='Confirmed';   
}   
}

setStatus([
...arr,
])
}



return(<>

<div className='container-fluid'>

<div className='title_head' ><h1>#Orders</h1></div>

<div className='order_table'>
    <table>
        <tr className='tb_h'>
                
  <th>    Product      </th>
  <th>    Customer      </th>
  <th>    Date delivery</th>
  <th>    Price        </th>
  <th>    Payment method</th>
  <th>  Status  </th>
  <th>    Action       </th>
        </tr>
{orders&&orders.map((data , index)=>{
return(<tr key={index}>
<td>{data.orderItems[0].name}</td>
<td>{data.shippingAddress.firstName}</td>
<td>{data.createdAt}</td>
<td>${data.totalPrice}</td>
<td>{data.paymentMethod}</td>
<td><p className='pend'>{status==''?'Pending..':status[index]}</p></td>
<td>
    <button className='prod_btn r' onClick={()=>delateuser(data._id,index)} >cancel</button>
    <button className='prod_btn i' onClick={()=>coneuser(data._id,index)} >Confirm</button>  
    </td>

</tr>)
})}


    </table>
</div>

</div>

</>)
}