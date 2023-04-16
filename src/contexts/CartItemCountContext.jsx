import React, { createContext, useState } from "react";

const CartItemCountContext = createContext(null);

const CartItemCountContextProvider = ({ children }) => {
    const [itemCount, setItemCount] = useState(0);

// //   useEffect(() => {
    
// //       // this would usually be your own backend, or localStorage
// //       // for example
// //       fetch("http://localhost:8080/cart/get/" + cartId )
// //         .then((response) => response.json())
// //         .then((result) => setCartId(result.id))
// //         .catch((error) => console.log("An error occured"));


// //     // fetchCartId();
// //   }, [cartId]);



  const values = {itemCount, setItemCount};
  return (
    // the Provider gives access to the context to its children
    

    <CartItemCountContext.Provider value={values}>
      {children}
    </CartItemCountContext.Provider>
  );
};

export { CartItemCountContext, CartItemCountContextProvider };