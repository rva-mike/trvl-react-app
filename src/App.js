import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/trvl-react-app" exact element={<Home />} />
          <Route path="/trvl-react-app/services" exact element={<Services />} />
          <Route path="/trvl-react-app/products" exact element={<Products />} />
          <Route path="/trvl-react-app/sign-up" exact element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
      
    </>


  );
}

export default App;
