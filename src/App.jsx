import React from 'react'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { SignUpMentor } from './pages/SignUpMentor'
const App = () => {
  return (
   <>


   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signUpMentor' element={<SignUpMentor/>} />
   </Routes>

   </>
  )
}

export default App