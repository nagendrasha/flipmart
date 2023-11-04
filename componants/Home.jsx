'use client'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter

  const [apiData,setApiData] = useState([]);

  useEffect(() => {

    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res);
      setApiData(res.data);

    }).catch((err) => {
      console.log(err);
    });
  },[]);

  const handleShop = () =>{

  }

  return (
    <>
    <Container disableGutters maxWidth='xl'>

   
      {/* <Header/> */}
      <Grid container sx={{  }} className="banner">
        <Box sx={{ height: "100%",width:"100%" }}>
          <Image src="/b3.png" alt="" width={1280} height={500} />
        </Box>
      </Grid>

      <Grid container sx={{ m:2 ,display:'flex', justifyContent:'space-between' }}>
          {apiData.map((ele) => {

            return (
              <Grid item lg={3} sm={3} md={3}>
            <Card sx={{ maxWidth: 250, mb:5 }}>
            <CardMedia
              sx={{ height:230 }}
              image={ele.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ele.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price : {ele.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ backgroundColor:'red' }} size="small" variant="contained" onClick={()=>{handleShop(ele.id)}} >Buy Now</Button>
              <Button size="small" variant="contained">Add To Cart</Button>
            </CardActions>
          </Card>
          </Grid>
            );
          })}
      </Grid>
      </Container>
    </>
  );
};

export default Home;
