import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { baseService } from '../../network/service';

import { CartContext, CartContextProvider } from "../../contexts/CartContext";

export default function ProductComponent({product}) {

  const navigate = useNavigate();  
  const {cartId, setCartId } = useContext(CartContext);

const getProduct = () => {
  navigate(`/product/${product.id}`)
}


const addToCart = async () => {

  const url = `/cart/add/${cartId}/${product.id}`;
  await baseService.post(url, {});
}

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="140"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.productName} {product.salesPrice} TL
        </Typography>

        <Button onClick = {addToCart}> Sepete Ekle </Button>

      </CardContent>
    </Card>

  );
};

