import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import EmailVerify from '../pages/EmailVerify'
import Home from '../pages/Home'
import ResetPass from '../pages/ResetPass'


function Routtes() {
  return (
     <Router>
          <Routes>
               <Route path='/' element={<Home></Home>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/email-verify' element={<EmailVerify/>}/>
               <Route path='/reset-password' element={<ResetPass/>}/>

          </Routes>
     </Router>
   
  )
}

export default Routtes