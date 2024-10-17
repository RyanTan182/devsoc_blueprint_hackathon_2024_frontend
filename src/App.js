import './App.css';
import WelcomePage from './components/WelcomePage/WelcomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar/Navbar';
import { Provider } from 'react-redux';
import Header from './components/common/navbar/Header';
import ProductPage from './components/ProductPage/ProductPage';
import CreateProductPage from './pages/CreateProductPage';
import GetOrderDetailPage from './pages/OrderDetailPage';
import GetOrderHistoriesPage from './pages/OrderHistoriesPage';
import MyProfilePage from './pages/MyProfilePage';
import LoginPage from './pages/LoginPage';
import GetProductDetailPage from './pages/GetProductDetailPage';
import store from './store';
import SignUpPage from './pages/UserRegistrationPage';
import Home from './components/Home/Home';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './components/common/navbar/Footer';


function App() {
  return (
    <Provider store={store}>
        <Router>
          <div className="App">
          <Header />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/account/register" element={<SignUpPage />} />
              <Route path="/search" element={<ProductPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />

              {/* Home is supposed to be the search page, product page is for the dedicated product */}
              <Route path="/explore" element={<Home/>} />
              <Route path="/product/create" element={<CreateProductPage />} />
              <Route path="/product/:productid" element={<GetProductDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="/profile/:accountid" element={<MyProfilePage />} /> */}
              <Route path="/order" element={<GetOrderHistoriesPage />} />
              <Route path="/order/:orderid" element={<GetOrderDetailPage />} />
            </Routes>

          <Footer />

        </div>
        </Router>
    </Provider>
  );
}

export default App;
