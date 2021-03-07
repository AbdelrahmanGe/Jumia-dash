import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderComponent from "../components/header";
import Intro from "./auth/intro";
import Login from "./auth/login";
import Register from "./auth/resgister";

export default function Home() {
    


return(<>

<div  className='container-fluid'>
<HeaderComponent></HeaderComponent>






<Switch>
<Route path='/' exact component={Intro}  ></Route>
<Route path='/home/' exact component={Intro}  ></Route>
<Route path='/home/login' exact component={Login}></Route>
<Route path='/home/register' exact component={Register}></Route>
</Switch>



</div>









</>)
}