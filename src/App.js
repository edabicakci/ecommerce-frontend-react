import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useContext} from "react";
import { Routes, Route , useNavigate} from 'react-router-dom';
import { CartContext } from "./contexts/CartContext";

import CategoriesComponent from './components/inventory/CategoriesComponent';
import ProductDetailComponent from './components/inventory/ProductDetailComponent';
import ProductsComponent from './components/inventory/ProductsComponent';
import NotFoundPage from './components/inventory/NotFoundPage';
import CartSummaryComponent from './components/shopping/CartSummaryComponent';
import CartCheckoutComponent from './components/shopping/CartCheckoutComponent';
import CartDetailComponent from './components/shopping/CartDetailComponent';

const App = () => {

  const {cartId, setCartId } = useContext(CartContext);
  const navigate = useNavigate();

  const goCart = () =>{
    navigate(`/cart/get/${cartId}`)
  }

  const goHome = () =>{
    navigate("/")
  }
  return (
<>

<Box sx={{ flexGrow: 1 }}>
  <AppBar position="static" color='secondary'>
    <Toolbar>
      
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        GODORO MARKET
      </Typography>
      <Button onClick={goHome} color="inherit">Ana Sayfa </Button> 
      <Button onClick={goCart} color="inherit"> Sepetim </Button> 
    </Toolbar>
  </AppBar>
</Box>
   

<div style= {{margin: "20px"}}>

<Routes >
  <Route path = "/" element= {<CategoriesComponent />} />
  <Route path="/categories" element={<CategoriesComponent />} />
  <Route path="/product/:productId" element={<ProductDetailComponent />} />
  <Route path="/products/:categoryId" element={<ProductsComponent />} />
  <Route path= "/cart/get/:cartId" element={<CartDetailComponent/>} />
  <Route path= "/cart/checkout" element={<CartCheckoutComponent/>} />
  <Route path='*' element={<NotFoundPage />} />
</Routes>

</div>


</>
  
  
  );
};



export default App;