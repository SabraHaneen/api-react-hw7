import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Products from './components/products/Products.jsx'
import Home from './components/home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Resturan from './components/resturant/Resturan.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/products' element={     <Products/>
}/>
    </Routes>
    <Routes>
      <Route path='/resturant' element={     <Resturan/>
}/>
    </Routes>
     <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
