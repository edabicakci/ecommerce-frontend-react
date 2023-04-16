// import React, { useState } from "react";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";

// export default function ShoppingButtonComponent({cartProduct}) {

//     const [itemCount, setItemCount] = useState();

//     const addToCart = async () => {

//       const url = `/cart/add/${cartId}/${product.id}`;
//       await baseService.post(url, {});
//     }
  
//   return (
//     <>
//     {/* <Badge color="secondary" badgeContent={itemCount}>
//           <ShoppingCartIcon />{" "}
//         </Badge> */}
//     <ButtonGroup>
//     <Button
//       onClick={() => {
//         // setItemCount(Math.max(itemCount - 1, 0));
//         setItemCount(cartProduct);
//       }}
//     >
//       {" "}
//       <RemoveIcon fontSize="small" />
//     </Button>
//     <Button
//       onClick={() => {
//         setItemCount(itemCount + 1);
//       }}
//     >
//       {" "}
//       <AddIcon fontSize="small" />
//     </Button>
//   </ButtonGroup>
    
//     </>
    
//   )
// }

