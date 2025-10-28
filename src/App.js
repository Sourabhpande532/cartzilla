import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { ProductListings } from './pages/ProductListings';
import { Cart } from './pages/Cart';
import { ContextProvider } from './context/CartContext';

function App() {
  return (
    <div className="container">
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={ <ProductListings /> } />
            <Route path='/cart' element={ <Cart /> } />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
