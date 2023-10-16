import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return ( <BrowserRouter>
  <Header />
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
   </Routes>
   <Footer />
  </BrowserRouter>
  );
}

export default App;