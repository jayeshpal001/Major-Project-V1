import React from 'react'
import { Home } from './components/Home'
import { BrowserRouter as Router, Routes,Route  } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

    </Routes>
   </Router>
     
   </>
  )
}

export default App