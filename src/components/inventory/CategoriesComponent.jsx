import { useEffect, useState } from "react";
import { baseService } from "../../network/service";
import CategoryComponent from "./CategoryComponent";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function CategoriesComponent() {

    const [categories, setCategories] = useState([])

    const getData = async () => {
        setCategories(await baseService.get("/categories"))
    }

    useEffect(() => {
        getData()
    }, [])

    return (


        <div >

            <Grid
                container
                spacing={8}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >

                {categories.map(category =>

                    <Grid item xs={3}>
                        <Card>
                            <CardContent>
                                {<CategoryComponent category={category} />}
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>

        </div>


    );






};

