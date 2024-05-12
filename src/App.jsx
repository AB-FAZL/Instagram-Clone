import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home/Home.jsx";
import { Link } from 'react-router-dom';
function App() {
  return (
    <>
      
      <Router>
      <div className='w-full h-screen  bg-black'>
        <Home></Home>
      </div>

      </Router>

    




     
    </>
  )
}

export default App
