import React, { useContext } from 'react';
import '../styles/Header.scss';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import { UserContext } from '../context/UserContext';
import { ProductsContext } from '../context/ProductsContext/ProductsState'; // ✅ nuevo

const Header = () => {
  const { user } = useContext(UserContext);
  const { cart } = useContext(ProductsContext); // ✅ nuevo
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // ✅ nuevo

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__left">
          <img src="/logo.png" alt="Logo" className="header__logo" />
        </div>

        <div className="header__center">
          <div className="header__search">
            <input type="text" placeholder="Buscar productos..." />
            <FiSearch className="header__search-icon" />
          </div>
        </div>

        <div className="header__right">
          {user ? (
            <Link to="/perfil" className="header__username">
              {user.name}
            </Link>
          ) : (
            <Link to="/login">
              <FiUser className="header__icon" />
            </Link>
          )}

          {/* ✅ Modificado para mostrar contador */}
          <Link to="/carrito" className="header__cart">
            <FiShoppingCart className="header__icon" />
            {totalItems > 0 && <span className="header__cart-count">{totalItems}</span>}
          </Link>
        </div>
      </div>
      
      <nav className="header__nav">
        <ul className="nav__list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
