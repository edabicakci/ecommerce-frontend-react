import * as React from 'react';
import {useNavigate} from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function CategoryComponent({category}) {

    const navigate = useNavigate();

    const getProducts = () => {
        navigate(`/products/${category.id}`)
    
      }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={getProducts}>
      <CardMedia
        component="img"
        height="140"
        image={category.imgPath}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category.categoryName}
        </Typography>
  
      </CardContent>
    </Card>
  );
}
