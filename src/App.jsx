import './App.css'
import Home from './components/Home'
import CheckoutPage from './routes/CheckoutPage';
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/checkout" element={ <CheckoutPage /> } />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
