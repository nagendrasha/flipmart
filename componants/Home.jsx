import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <Grid container sx={{  }} className="banner">
        <Box sx={{ height: "100%" }}>
          <Image src="/b3.png" alt="" width="1400" height="600" />
        </Box>
      </Grid>

      <Grid container sx={{ m:5 }}>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              src="/boat.jpeg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
