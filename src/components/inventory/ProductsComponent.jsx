import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseService } from "../../network/service";
import ProductComponent from "./ProductComponent";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function ProductsComponent() {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    const getData = async () => {
        setProducts(await baseService.get(`/products/${categoryId}`))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Grid
            container
            spacing={8}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >

            {products.map(product =>

                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            {<ProductComponent product={product} />}
                        </CardContent>
                    </Card>
                </Grid>
            )}
        </Grid>
    )
};

