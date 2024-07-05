import './App.css'
import AboutPage from './routes/AboutPage'
import Home from './components/Home'
import ProductPage from './components/ProductPage';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/product" element={ <ProductPage /> } />
          <Route path="/product2" element={ <ProductPage /> } />
          <Route path="/about" element={ <AboutPage /> } />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
