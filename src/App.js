import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage/HomePage';
import AuthProvider from './Authentication/Context/AuthProvider/AuthProvider';
import SinglePlace from './Pages/Places/SinglePlace';
import Register from './Pages/Log/Register/Register';
import Login from './Pages/Log/Login/Login';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import PrivateRoute from './Authentication/Private/PrivateRoute/PrivateRoute';


function App() {
  return (
    // <div className='App'>
      <AuthProvider>
           <Navigation/>

      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path="/places/:id" element={<PrivateRoute><SinglePlace /></PrivateRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>

      </AuthProvider>
    // </div>

  );
}

export default App;
