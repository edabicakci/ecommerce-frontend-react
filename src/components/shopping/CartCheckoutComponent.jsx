import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { baseService } from "../../network/service";
import { useEffect, useState, useContext} from "react";
import { CartContext, CartContextProvider } from "../../contexts/CartContext";
import CartSummaryComponent from "./CartSummaryComponent";


export default function CartCheckoutComponent() {

  const {cartId,setCartId} = useContext(CartContext);
  const [refresh, setRefresh] = useState(0);



  let cartObj = {
    "id": cartId,
    "customerName": "",
    "cardNumber": ""
  }

  const [cart, setCart] = useState(cartObj);

   const proceed = async () => {
    setRefresh(1)
    if( cart.customerName === "" || cart.cardNumber === "" ){
        alert("Lütfen bigilerinizi eksiksiz giriniz!")
        return
    }
    await baseService.put("/cart/checkout", cart)
   
   }

   const handleCustomerName = (e) => {
    const updatedCart = { ...cart, "customerName": e.target.value };
    setCart(updatedCart);
    console.log(cart)

   }

   const handleCardNumber = (e) => {
    const updatedCart = { ...cart, "cardNumber": e.target.value };
    setCart(updatedCart);
    console.log(cart)

   }

   
   //   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };


if (refresh === 0){
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sepeti Onayla
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="customerName"
            label="İsminizi Giriniz"
            name="customerName"
            autoFocus
            onChange={ (e) => handleCustomerName(e)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="card_number"
            label="Kredi Kartı Numaranızı Giriniz"
            id="card_number"
            onChange={ (e) => handleCardNumber(e)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            color="secondary"
            onClick={proceed}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Onayla
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </Box>
      </Box>
    </Container>
  );
}else{
    return (<CartSummaryComponent cartId={cartId} />);
}
}
