import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext(null);

const CartContextProvider = ({ children }) => {
    const [cartId, setCartId] = useState(0);

  useEffect(() => {
    
      // this would usually be your own backend, or localStorage
      // for example
      fetch("http://localhost:8080/cart/get/" + cartId )
        .then((response) => response.json())
        .then((result) => setCartId(result.id))
        .catch((error) => console.log("An error occured"));


    // fetchCartId();
  }, [cartId]);



  const values = {cartId, setCartId};
  return (
    // the Provider gives access to the context to its children
    

    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };