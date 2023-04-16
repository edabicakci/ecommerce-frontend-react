import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

import { useNavigate} from 'react-router-dom';
import { useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { baseService } from "../../network/service";
import { CartContext, CartContextProvider } from "../../contexts/CartContext";
import { CartItemCountContext, CartItemCountContextProvider } from "../../contexts/CartItemCountContext";
import ShoppingButtonComponent from "./ShoppingButtonComponent";
import CartCheckoutComponent from "./CartCheckoutComponent";


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function CartDetailComponent() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const {itemCount, setItemCount } = useContext(CartItemCountContext);

  const {cartId,setCartId} = useContext(CartContext);
  const [cart, setCart] = useState({});
  const [refresh, setRefresh] = useState(0);

  const navigate = useNavigate();
 
  const getData = async () => {
    setCart(await baseService.get(`/cart/get/${cartId}`))
    setRefresh(0)
  }

  const refreshProductList =  (productId, salesQuantity) => {
    deleteProduct(productId, salesQuantity)
    setRefresh(1);
  }

  const checkout =  () => {
    navigate(`/cart/checkout`, { replace: true })
  }
  const deleteProduct = async (productId, salesQuantity) => {

    setItemCount( itemCount - salesQuantity)
    await baseService.delete(`/cart/remove/${cartId}/${productId}`, {}) 
  }

  useEffect(() => {
    getData()
  }, [refresh])

    if (cart && cart.cartProductList) {
      let len = cart?.cartProductList?.length

      if ( len === 0){
        return <h1 >Sepetiniz Boş!</h1>
      }
      else{
        return (
            <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                   Sepetinizdeki Ürünler
                  </Typography>
                  <Demo>
                    <List dense={dense}>
                    {cart.cartProductList.map(cartProduct =>
                        <ListItem
                          secondaryAction={
                            <>
                            <ShoppingButtonComponent cartId = { cartId } productId = {cartProduct.product.id} cartProduct = {cartProduct }/>        
                            <IconButton edge="end" aria-label="delete" onClick={() => refreshProductList(cartProduct.product.id, cartProduct.salesQuantity)}>
                              <DeleteIcon  />
                            </IconButton>
                            </>
                            
                          }
                        >
                          {/* <ListItemAvatar>
                            <Avatar>
                              <FolderIcon />
                            </Avatar>
                          </ListItemAvatar> */}
                          <ListItemText
                          
                            // primary= {
                            // <Typography variant="body2" style={{ color: '#FFFFFF' }}> {cartProduct.product.productName }
                            // {cartProduct.salesQuantity}</Typography>}
                            primary={<Typography variant="h6" style={{ color: 'black' }}>
                              <p>{cartProduct.product.productName} </p> 
                              {/* <p> {cartProduct.salesQuantity}  Adet </p>  */}
                              <p> {cartProduct.product.salesPrice * cartProduct.salesQuantity} TL </p> 
                             
                            </Typography>}

                            //secondary={secondary ? 'Secondary text' : null}    
                          />
                        </ListItem>  
                      )}
                    </List>

                    <Button
                      color="secondary"
                      onClick={checkout}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      >
                      Sipariş Ver
                     </Button>
                  </Demo>
                </Grid>
              </Grid>
            </Box>
            );
      }
    }
  }