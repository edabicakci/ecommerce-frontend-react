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
import CartCheckoutComponent from "./CartCheckoutComponent";
import CartDetailComponent from './CartDetailComponent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../../index.css';




export default function CartSummaryComponent({cartId}) {
  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  const [dense, setDense] = React.useState(false);
 // const {cartId,setCartId} = useContext(CartContext);
  const [cart, setCart] = useState({});
  let totalPrice = 0;

 
 
  const getData = async () => {
    console.log(cartId)
    setCart(await baseService.get(`/cart/get/${cartId}`))
  }

  useEffect(() => {
    getData()
  }, [])


        return (
            <>
           <Box >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Demo>
                  <Typography variant="h6" style={{ color: 'black',fontFamily:'verdana'}}>Sayın {cart?.customerName} sipariş bigileriniz aşağıdadır.  </Typography>
                    <Card  >
                    <CardContent>
                    {/* <List dense={dense}> */}
                   
                        {cart?.cartProductList?.map((cartProduct) => {
                            totalPrice = totalPrice + cartProduct.product.salesPrice * cartProduct.salesQuantity
                            return (
                            
                      <Card >
                        <CardContent>
                    
                        {/* {<Typography variant="h6" style={{ color: 'black' }}> */}
                                <div className="some-class">
                                    {/* <span align="left" {cartProduct.product.productName} /> */}
                                    <span  >  {cartProduct.product.productName}</span> 
                                    <span >  {cartProduct.salesQuantity}  Adet </span>
                                    <span >  {cartProduct.product.salesPrice * cartProduct.salesQuantity} TL </span>
                                 </div> 
                                {/* </Typography>
                                }  */}

                        

                            
                        </CardContent>


                      </Card>

                    
                        )

                        }
                      )}
 
                    <h1> Toplam: {totalPrice} TL</h1>
                    </CardContent>


                    </Card>
                  
                  </Demo>
                </Grid>
              </Grid>
            </Box>
           
            </>
            
            );
      
    
  }