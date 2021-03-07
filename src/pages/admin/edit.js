
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { DO_Update } from '../../networks/Api';

export default function Edit(props) {
    
let history=useHistory()
let param =useParams();
let [inputvalue , setinputvalue]=useState({
name:'',
description:'',
price:0,
category:'',
brand:'',
discount:0,
max_qty:0,
})

useEffect(()=>{
console.log(props.location.state)
console.log(param.id)

setinputvalue({
...inputvalue,
...props.location.state    
})

},[])


function EditProduct(v){
v.preventDefault()    
console.log(inputvalue)
console.log(param.id)
DO_Update(inputvalue,param.id).then((data)=>{
console.log(data)
alert('modified')
history.push('/dash/')

}).catch((err)=>{
console.log(err)

})


}


function getvalue (v) {

setinputvalue({
...inputvalue,
[v.target.name]:v.target.value
})

}




return(<>

<div className='container'>
    
<div className='title_stack'>
    <h1> # Update</h1>
</div> 

<div className='row'>


<div className='col-lg-12 center_box '>


<form style={{width:'50%'}} className='box_one' >
  <div className="form-group">
    <label >Name</label>
    <input type="text" name='name' onChange={getvalue}  value={inputvalue.name} className="form-control"></input>
  </div>
  <div className="form-group">
    <label >description</label>
    <input type="text" name='description'  onChange={getvalue}  value={inputvalue.description} className="form-control"></input>
  </div>
  <div className="form-group">
    <label >price</label>
    <input type="number" name='price' onChange={getvalue}  value={inputvalue.price} className="form-control"></input>
  </div>
  <div className="form-group">
    <label >category</label>
    <input type="text" name='category' onChange={getvalue}  value={inputvalue.category} className="form-control"></input>
  </div>
  <div className="form-group">
    <label >brand</label>
    <input type="text" name='brand' onChange={getvalue}  value={inputvalue.brand} className="form-control"></input>
  </div>
  <div className="form-group">
    <label >Max-qty</label>
    <input type="range" name='max_qty' onChange={getvalue}  value={inputvalue.max_qty} min='1' max='100' className="form-control"></input>
  </div>
  <div className="form-group">
    <label >Discount</label>
    <input type="range" name='discount' onChange={getvalue}  value={inputvalue.discount} min='1' max='100' className="form-control"></input>
  </div>
 
  <div className="form-group">
    
   <button  onClick={EditProduct}  className='btn btn-primary'> Upadate </button>
  </div>
</form>






</div>
</div>
 </div>








</>)

}