
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import React, { Suspense } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/homepage';
import AdminDashboard from './pages/admin/dashboard';
import AdminProduct from './pages/admin/products';
import PrivateRouter from './pages/auth/auth';
import Loading from './load';
function App() {
const LazyDash=React.lazy(()=>import('./pages/admin/dashboard'))

  return (<>
    <BrowserRouter>
<Suspense  fallback={Loading}>
<div className="App">


<Switch>

<Route path='/' exact component={Home}></Route>  
<Route path='/home*' exact component={Home}></Route>



<PrivateRouter path='/dash*' exact Component={LazyDash} ></PrivateRouter>



</Switch>



    </div>
</Suspense>
  </BrowserRouter>
    </>
  );
}

export default App;
