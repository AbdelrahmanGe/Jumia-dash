import Spinner from 'react-bootstrap/Spinner'
export default function Loading(){


return(<>
<div className='center_box' style={{width:'100%' ,height:'100%' ,backgroundColor:'rgba(0, 0, 0, 0.575)'}} >


<div>
<Spinner animation="border" variant="warning"  style={{width:'100px'}} />
<Spinner animation="border" variant="warning"  style={{width:'100px'}} />
<Spinner animation="border" variant="warning"  style={{width:'100px'}} />
<Spinner animation="border" variant="warning"  style={{width:'100px'}} />
</div>


</div>

</>)

}