import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Perfil from './components/Perfil';
import Register from './components/Register'; 
import Home from './components/Home';
import ProductList from './components/Products/ProductList';
import ProductDetail from './components/Products/ProductDetail';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Carrito from './components/Carrito';
import AdminPanel from './components/Admin/AdminPanel';



function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
  
          <Route path="/" element={<Home />} />

        
          <Route path="/productos" element={<ProductList />} />
          <Route path="/productos/:id" element={<ProductDetail />} />

       
          <Route path="/nosotros" element={<Nosotros />} />     
          <Route path="/contacto" element={<Contacto />} />   

          
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/register" element={<Register />} />

         
          <Route path="/carrito" element={<Carrito />} />

          <Route path="/admin" element={<AdminPanel />} />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;

