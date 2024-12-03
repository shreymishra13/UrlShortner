import { useState } from 'react'
import './App.css'
import Form from './Form'
import Navbar from './Navbar'
import Footer from './Footer'
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
  <Navbar/>
  <h1 className='text-center my-5 text-white'>Snap URL Shortner</h1>
   <Form/>
   <Footer/>
   </>
  )
}

export default App
