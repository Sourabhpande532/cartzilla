import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { ProductListings } from './pages/ProductListings';
import { Cart } from './pages/Cart';
import { ContextProvider } from './context/CartContext';
import { AllBooks } from './pages/AllBooks';
import { AddBooks } from './pages/AddBook';
import { BookProvider } from './context/BookContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="container">
      <BookProvider>
        <ContextProvider>
          <ThemeProvider>
            <Router>
              <Navbar />
              <Routes>
                <Route path='/' element={ <ProductListings /> } />
                <Route path='/cart' element={ <Cart /> } />
                <Route path='/books' element={ <AllBooks /> } />
                <Route path='/addBooks' element={ <AddBooks /> } />
              </Routes>
            </Router>
          </ThemeProvider>
        </ContextProvider>
      </BookProvider>
    </div>
  );
}
export default App;

/* To know more about context in details
https://codesandbox.io/p/sandbox/addtocart-9xkf2x */