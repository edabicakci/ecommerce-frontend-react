import React, { useContext, useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { baseService } from '../../network/service';
import { CartItemCountContext, CartItemCountContextProvider } from "../../contexts/CartItemCountContext";

export default function ShoppingButtonComponent({cartId, productId, cartProduct}) {

    // const [productCount, setProductCount] = useState();
    const {itemCount, setItemCount} =useContext(CartItemCountContext);
    const [cartProductCount, setCartProductCount] = useState(cartProduct.salesQuantity);
    const [cart, setCart] = useState(cartProduct.salesQuantity);


    //   const getData = async () => {
    //     setCart(await baseService.get(`/cart/get/${cartId}`))
    // }

    // useEffect(() => {
    //     getData()
    // }, [])


    // const findCartProduct = () => {
    //   users.find(element => element.id === userId);
    //   let cartProduct = cart.cartProductList.find(cartProduct => cartProduct.product.id === productId )
    //   setCartProductCount(cartProduct.salesQuantity)
    // }
   
    const addToCart = async () => {

      const url = `/cart/add/${cartId}/${productId}`;
      setItemCount( itemCount + 1)
      setCartProductCount(cartProductCount + 1 )
      await baseService.post(url, {});
       
    }

    const deleteProduct = async () => {

      setItemCount( itemCount - 1)
      setCartProductCount(cartProductCount - 1 )
      await baseService.post(`/removeOneItem/${cartId}/${productId}"`, {}) 
    }
  
  return (
    <>
    {/* <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge> */}
        <p> {cartProductCount}</p>
    <ButtonGroup>
    <Button
      onClick={deleteProduct}
    >
      {" "}
      <RemoveIcon fontSize="small" />
    </Button>
    <Button
      onClick={addToCart}
    >
      {" "}
      <AddIcon fontSize="small" />
    </Button>
  </ButtonGroup>
    
    </>
    
  )
}

