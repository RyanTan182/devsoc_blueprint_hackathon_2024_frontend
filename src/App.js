import './App.css';
import WelcomePage from './components/WelcomePage/WelcomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import ProductPage from './components/ProductPage/ProductPage';


function App() {
  return (
      <Router>
        <div className="App">
        <Navbar />
          <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/products" element={<ProductPage />} />
          </Routes>
       </div>
      </Router>
      
      
  
  );
}

export default App;
