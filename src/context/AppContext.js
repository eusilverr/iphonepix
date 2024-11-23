import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types'; // Importa o PropTypes

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); // Itens no carrinho
  const [isCartVisible, setIsCartVisible] = useState(false); // Visibilidade do carrinho global

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Adiciona validação da prop children
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
