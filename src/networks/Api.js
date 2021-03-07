import axios from 'axios'


let url='https://jumia-mearn.herokuapp.com'


export const GetOrders=async()=>{

return axios.get(url+'/AllOrders',{
    headers:{
        authorization:await localStorage.getItem('token')
    }
})
}

export const GetProducts=async ()=>{
return axios.get(url+'/AllProducts',{
    headers:{
        authorization:await localStorage.getItem('token')
    }
})

}

export const GetClients=async()=>{

return axios.get(url+'/AllUsers',{
    headers:{
        authorization:await localStorage.getItem('token')
    }
})

}


export const Do_register=(value)=>{
return axios.post(url+'/api/admin/register',{
fullName:value.name,
email:value.email,
password:value.password,
phone:value.phone
})

}




export const Do_login=(value)=>{
return axios.post(url+'/admin/login',{
email:value.email,
password:value.password
})
}




export const DO_Update=async (value,id)=>{
    console.log(value)
return axios.patch(url+'/update/product',value,{
params:{
    id:id
},
headers:{
    authorization:await localStorage.getItem('token')
}
})


}






export const Do_delete=async (id)=>{
return axios.delete(url+'/delete/product',{
params:{
    id:id
},
headers:{
    authorization:await localStorage.getItem('token')
}
})

}


export const GetLikes=()=>{



}


export const Addproduct=async (value)=>{

let header= await localStorage.getItem('token')
return axios.post(url+'/add/product',{
      name:value.name,
      nameAR:value.arabname,
      description:value.description,
      descriptionAR:value.arabdescription,
      max_qty:value.max_qty,
      img:[value.img],
      price:parseInt(value.price),
      discount:parseInt(value.discount),
      seller_name:await localStorage.getItem('fullName'),
      category:value.category,
      brand:value.brand
},{
headers:{
    authorization:header
}

})
    
}