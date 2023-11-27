"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// seo code
// export const metadata = {
//     title: 'Login Page',
//     description: 'this is desc',
//   }

const Shop = () => {

  const router = useRouter();

  const [apiData, setApiData] = useState([]);

  const [ cate,setCate ] =  useState([]);

  const fetchData = async () => {
    await axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);

        const category =  res.data.map((ele)=>{
          return ele.category

        })
        const uniqueCat = new Set(category)

        setCate([...uniqueCat])
        setApiData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleFilter = (ele) => {
    
    console.log(ele);
  }
  // console.log(data);
  useEffect(() => {
    fetchData()
  }, []);


  const handleShop = (id) =>{
    router.push(`/shop/product/${id}`);
  }

  return (
    <>
      <Grid container>
        <Grid sx={{ mt:5 }} item xs={3} sm={3} md={3} lg={3}>
          <Box sx={{ m: 5, textAlign: "center" }} boxShadow={5}>
            <Typography variant="h4">Category</Typography>
            <FormGroup sx={{ p: 2 }}
            onChange={handleFilter}
            >
              {
                cate.map((ele,index)=>{
                  return (
                    <FormControlLabel key={index} control={<Checkbox onChange={handleFilter(ele)}/>} label={ele}  />
                  )
                })
              }
            </FormGroup>
          </Box>
        </Grid>

        <Grid item xs={9} md={9} sm={9} lg={9}>
          <Typography variant="h3" sx={{ textAlign:'center' }}>Shop</Typography>
          <Box sx={{ m: 2, textAlign: "center", display:'flex' , flexWrap:'wrap' ,justifyContent:'center' }}>
            {apiData.map((ele) => {
              return (
                <Card sx={{ maxWidth: 300, m:2 }}>
                  <CardMedia
                    sx={{ height: 280 }}
                    image={ele.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {ele.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ₹{ele.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      sx={{ backgroundColor: "red" }}
                      size="small"
                      variant="contained"
                      onClick={(()=>{handleShop(ele.id)})}
                    >
                      Buy Now
                    </Button>
                    <Button size="small" variant="contained">
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
