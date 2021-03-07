import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import{Line} from 'react-chartjs-2'
import {Bar} from 'react-chartjs-2'
import {Doughnut} from 'react-chartjs-2'
import { Addproduct, GetClients, GetOrders, GetAllAdmins,GetProducts } from "../../networks/Api";
import { useHistory } from "react-router";

export default  function Board(params) {


let history=useHistory()
let [ratingSales , SetretingSales]=useState([])

let [inputinfo , setinputinfo]=useState({
  name:'',
  description:'',
  price:0,
  category:'',
  brand:'',
  discount:0,
  img:'',
  discount:0,
  max_qty:0,
  arabdescription:'',
  arabname:'',
})

const [dash , setdash]=useState({
orders:21,
products:21,
cutomers:21,
sales:1000
})


let [cl , setcli]=useState('')
let [ord, setord]=useState('')
let [pro, setpro]=useState('')
let [sales, setSales]=useState('')
let [adminsc, setadminsc]=useState([])
useEffect(()=>{

GetAllAdmins().then((data)=>{

setadminsc([...data.data])

}).catch((err)=>{console.log(err)})





GetOrders().then((data)=>{
setord(data.data.length)
let m=sumSales(data.data)

setSales(parseInt(m))

})



GetProducts().then((data)=>{
setpro(data.data.length)
})


GetClients().then((data)=>{
 console.log(data.data.length)
 setcli(data.data.length)
  }
).catch((er)=>{console.log(er)})

},[])


function sumSales(arr) {
let sum = 0 ; 
let ar=[]
for(let x =0 ; x <arr.length ; x++){
sum+=arr[x].totalPrice
ar[x]=arr[x].totalPrice;

}

let ko=ar.slice(0,5)
console.log(ar)
SetretingSales([...ko])

return sum ;
}

    const [show, setShow] = useState(false);

    const sendinfo = () =>{

      Addproduct(inputinfo).then((data)=>{
   console.log(inputinfo)
   console.log(data)
    alert('you created new one !')
      setShow(false)

      }).catch((err)=>{
alert('err')
console.log(err)
      })
    };


    const handleClose=()=>setShow(false)



    const handleShow = () =>setShow(true);
  
const data = {
  labels: ["march", "april", "may", "june", "augest"],
  datasets: [
    {
      label:"Products",
      data:[5,3,6,2,4],
      borderColor:['rgb(151, 255, 15)','rgb(151, 255, 15)','rgb(151, 255, 15)','rgb(43, 255, 0)','rgb(43, 255, 0)'],
      backgroundColor:['rgb(15, 107, 255)','rgb(15, 107, 255)','rgb(15, 107, 255)','rgb(15, 107, 255)','rgb(15, 107, 255)','rgb(15, 107, 255)'],
      
    },
    {
      label: "Sales",
      data:[...ratingSales] ,
      borderColor:['rgba(39, 39, 39, 0.548)','rgba(39, 39, 39, 0.548)','rgba(39, 39, 39, 0.548)','rgba(39, 39, 39, 0.548)','rgba(39, 39, 39, 0.548)'],
      backgroundColor:['rgb(255, 23, 166,0.5)','rgb(255, 23, 166,0.5)','rgb(255, 23, 166,0.5)','rgb(255, 23, 166,0.5)','rgb(255, 23, 166,0.5)'],
    },
  ],
};


function getval(v) {
setinputinfo({
...inputinfo,
[v.target.name]:v.target.value
})
}

function AdminACCount() {
  
history.push('/dash/partner')

}

const [showa, setShowa] = useState(false);

const handlekClose = () => setShowa(false);
const handlekShow = () => setShowa(true);
    return(<>
  
<div className='container-fluid'>
<div className='row box_one '>

<div className='col-lg-12 center_box'>

<Button variant="primary" onClick={handlekShow}>
        Admins
      </Button>

      <Modal show={showa} onHide={handlekClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admins Account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <div className="row">
  <div className='fox'>
   <h1>Fullname</h1> 
  </div>
  <div className='fox'>
    <h1>Email</h1>
  </div>
</div>

 {adminsc&&adminsc.map((data,index)=>{
return(
<div className="row nice">
  <div className='fox'>
   <p>{data.fullName}</p> 
  </div>
  <div className='fox'>
    <p>{data.email}</p>
  </div>
</div>
)
 })}
          
          
          </Modal.Body>
        <Modal.Footer>


          <Button variant="secondary" onClick={handlekClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
   








<Button variant="primary" onClick={AdminACCount}>
       Create new Account
      </Button>

<Button variant="primary" onClick={handleShow}>
       Add New Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
  <div className="form-group">
    <label >Name</label>
    <input  type="text" name='name'      value={inputinfo.name} onChange={getval}  className="form-control"></input>
  </div>
  <div className="form-group">
    <label >Arabic Name</label>
    <input  type="text" name='arabname'  value={inputinfo.arabname} onChange={getval}  className="form-control"></input>
  </div>
  <div className="form-group">
    <label >Description</label>
    <input type="text" name='description' value={inputinfo.description} onChange={getval}  className="form-control"></input>
  </div>
  <div className="form-group">
    <label >Arabic Description</label>
    <input type="text" name='arabdescription' value={inputinfo.arabdescription} onChange={getval}  className="form-control"></input>
  </div>
  <div className="form-group">
    <label >price</label>
    <input type="number" name='price'    value={inputinfo.price} onChange={getval} className="form-control"></input>
  </div>
  <div className="form-group">
    <label >category</label>
    <input type="text" name='category'   value={inputinfo.category} onChange={getval}  className="form-control"></input>
  </div>
  <div className="form-group">
    <label >brand</label>
    <input type="text" name='brand'      value={inputinfo.brand} onChange={getval}  className="form-control"></input>
  </div>
  <div className="form-group">
    <label >Discount</label>
    <input type="range" name='discount'   value={inputinfo.discount} onChange={getval}    min='1' max='100' className="form-control"></input>
  </div>
  <div className="form-group">
    <label >Image</label>
    <input type="url" name='img'       value={inputinfo.img} onChange={getval}   className="form-control"></input>
  </div>
</form>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendinfo}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>

</div>


</div>


<div className='row co'>


  <div className='col-lg-3 '>
<div className='row b'>
<div className='col-lg-5'>
  <h1 className='ti'>Sales</h1>
 <h1 className='ti'>${sales}</h1> 
</div>
<div className='col-lg-5 center_box'>
<span><i class="far fa-chart-bar bb"></i></span> 
</div>

</div>
  </div>

  <div className='col-lg-3 '>
<div className='row g'>
<div className='col-lg-5'>
  <h1 className='ti'>Orders</h1>
 <h1 className='ti'>{ord}</h1> 
</div>
<div className='col-lg-5 center_box'>

<span><i className="fas fa-shopping-cart gg"></i></span>

</div>

</div>
  </div>

  <div className='col-lg-3 '>
<div className='row r'>
<div className='col-lg-5 '>
  <h1 className='ti'>Products</h1>
 <h1 className='ti'>{pro}</h1> 
</div>
<div className='col-lg-5 center_box'>

<span><i class="fas fa-industry rr"></i></span> 


</div>

</div>
  </div>

  <div className='col-lg-3 '>
<div className='row i'>
<div className='col-lg-5'>
  <h1 className='ti'>Users</h1>
 <h1 className='ti'>{cl}</h1> 
</div>
<div className='col-lg-5 center_box'>
<span><i class="fas fa-users ii"></i></span> 
</div>
</div>
  </div>






</div>

<div className='row m'>
    <div className='col-lg-12 box_one '>
 <Line  data={data}></Line>       
    </div>




</div>



<div className='row m '>
<div className='col-lg-6 box_one'>
<Line data={data}></Line>

</div>
<div className='col-lg-6 box_one'>
  <Bar data={data}></Bar>  
</div>

</div>



<div className='row m'>
<div className='col-lg-6 box_one'>
<Line  data={data}></Line>

</div>
<div className='col-lg-6 box_one'>
<Doughnut  data={data}></Doughnut>
</div>

</div>
</div>
    </>)
}