import './App.css'
import AboutPage from './routes/AboutPage'
import Home from './components/Home'
import ProductPage from './components/ProductPage';
import CheckoutPage from './routes/CheckoutPage';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/product" element={ <ProductPage /> } />
          <Route path="/checkout" element={ <CheckoutPage /> } />
          <Route path="/about" element={ <AboutPage /> } />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
