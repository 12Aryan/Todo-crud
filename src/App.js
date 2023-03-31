import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Loginpage from './components/Loginpage'
import Signuppage from './components/Signuppage'
import ProtectedRoutes from './services/ProtectedRoutes'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Loginpage/>}/>
    <Route path='/signup' element={<Signuppage/>}/> 
    <Route path='/' element={<ProtectedRoutes/>}>
    <Route path='/' element={<Home/>}/> 
    </Route>
    </Routes>
    </BrowserRouter>
    
  
  
    </>
  )
}

export default App
