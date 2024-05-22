import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter, Routes ,Route, Navigate} from 'react-router-dom'
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './pages/SingleProduct';
import One from './pages/One';
import Three from './pages/Three';
import { useContext, useState } from 'react';
import AuthContext from './context/AuthContext';

function App() {
 
 let authStore = useContext(AuthContext)
 let loginValue = authStore.user.login

  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
         {loginValue===true && <Route path='/' element={<Home />}/>}
         {loginValue===false && <Route path='/' element={<Navigate to={'/login'}/>}/>}
          {loginValue===true && <Route path='/xyz' element={<Cart/>}/>}
          {loginValue===false && <Route path='/xyz' element={<Navigate to={'/login'}/>}/>}
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Signup/>}/>
         {loginValue===true && <Route path='/single' element={<SingleProduct/>}/>}
         {loginValue===false && <Route path='/single' element={<Navigate to={'/login'}/>}/>}
          <Route path='/one' element={<One/>}/>
      

      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
