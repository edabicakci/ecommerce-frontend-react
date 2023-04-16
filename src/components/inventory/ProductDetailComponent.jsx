import { useParams } from 'react-router-dom';
import { useState, useContext} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { baseService } from '../../network/service';

import { CartContext, CartContextProvider } from "../../contexts/CartContext";

export default function ProductDetailComponent() {
  
  const [product, setProduct] = useState({});
  const {cartId, setCartId} = useContext(CartContext);

  const { productId } = useParams();


const getProduct = async() => {
  setProduct(await baseService.get(`/product/${productId}`))
}


const addToCart = async () => {

  const url = `/cart/add/${cartId}/${product.productId}`;
  await baseService.post(url, {});
}

  return (
    <Card sx={{ maxWidth: 345 }} onClick={getProduct}>
      <CardMedia
        component="img"
        height="140"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.productName} {product?.salesPrice} TL
        </Typography>

        <Button onClick = {addToCart}> Sepete Ekle </Button>

      </CardContent>
    </Card>

  );
};

