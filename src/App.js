import './App.css';
import WelcomePage from './components/WelcomePage/WelcomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Header from './components/common/navbar/Header';
import ProductPage from './components/ProductPage/ProductPage';
import CreateProductPage from './pages/CreateProductPage';

function App() {
  return (
      <Router>
        <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/createproducts" element={<CreateProductPage />} />
          </Routes>
       </div>
      </Router>
  );
}

export default App;
