import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>

    </>


  );
}

export default App;
