"use client";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
const Product = () => {
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const [size, setSize] = useState("");

  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  const handleChange = (eve) => {
    setSize(eve.target.value);
  };

  return (
    <>
      <Grid
        container
        sx={{ p: 10, display: "flex", justifyContent: "space-between" }}
      >
        <Grid item xs={7} lg={7} sm={7} md={7}>
          <Box>
            <img
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              width={300}
            />
          </Box>
          <Box sx={{ mt: 10 }}>
            <Typography variant="h3">Material</Typography>
            <Typography variant="p">
              Our manufacturing staff works with cleanliness for your health,
              safety and quality standard for our products so our garments are
              safe and healthy. We are using polycotton fabric for our garments.
              Your safety is our concern.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} lg={5} md={5} sm={5} sx={{ mt: 5 }}>
          <Typography variant="h4">Product Name</Typography>
          <Typography variant="p">
            Price : <span style={{ color: "red" }}> 1999</span>{" "}
          </Typography>{" "}
          <br />
          <span>
            {" "}
            <SquareFootIcon /> Size Guide
          </span>
          <Typography variant="h6">Size</Typography>
          <Box sx={{ maxWidth: 180 }}>
            <FormControl sx={{ mb: 1, minWidth: 180 }} size="small">
              <InputLabel id="demo-select-small-label">
                choose an option
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={size}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Grid container>
            <Grid item>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button>-</Button>
                <Button>1</Button>
                <Button>+</Button>
                <Button variant="contained">
                  {" "}
                  <ShoppingBagIcon sx={{ mr: 1 }} /> Add to Cart
                </Button>
              </ButtonGroup>
              <br />
              <Button variant="contained" sx={{ mt: 2, mb: 1 }}>
                {" "}
                <ShoppingBagIcon sx={{ mr: 1 }} /> Buy Now
              </Button>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                {" "}
                <FavoriteBorderIcon /> Add To Wishlist
              </Typography>
              <br />
              <Typography variant="p">Category</Typography>
              <br />
              <br />
              <Box sx={{ border: "1px solid black", p: 2 }}>
                <span>1 More Offer Available</span>
                <br />
                <Typography variant="p">
                  <span style={{ backgroundColor: "green", color: "white" }}>
                    EXTRA 5% OFF
                  </span>{" "}
                  on PREPAID ORDERS <br /> by using Debit/Credit Card/UPI
                </Typography>
              </Box>
              <br />
              <br />
              <Box sx={{ border: "1px solid black", p: 2 }}>
                <span style={{ color: "red" }}>Please Read this</span>
                <br />
                <Typography variant="p">
                  Please Check Our Size Chart And Select Right Size Accordingly
                  Our Size Chart This Product is Eligible For Exchange Only If
                  The Size is Not Received As Per Order Additional Exchange
                  Charge That Buyer Has To Pay Charge :- 120/-Rs. Shipping
                  Charge Of Exchange Product And No Any Exchange On Buy 1 Get 1
                  Free Order
                </Typography>
              </Box>
              <br />
              <Typography variant="p">Review</Typography>
              <hr />
              <Typography variant="p">There are no reviews yet.</Typography>
              <br />
              <br />
              <Typography variant="p">
                BE THE FIRST TO REVIEW “4 THOUGHT”
              </Typography>
              <hr />
              <Typography variant="p">
                Your email address will not be published. <br /> Required fields
                are marked
              </Typography>
              <br />
              <br />
              <span>
                Your rating <b style={{ color: "red" }}>*</b>
              </span>

              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
              </Box>
              <br />
              <TextField
                id="outlined-multiline-static"
                label="Your Review*"
                multiline
                rows={4}
              />
              <br />
              <br />
              <TextField label="Name*" />
              <br />
              <br />
              <TextField label="Email*" />
              <br />
              <br />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Save my name, email, and website in this browser for the next time I comment."
                />
              </FormGroup>
              <Button variant="contained" color="secondary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}></Grid>
      <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
        Realated Products
      </Typography>

      <Grid container sx={{ mb: 15, p: 5 }}>
        <Grid item xs={12} lg={12} md={12} sm={12}>
          <Box sx={{ display: "flex" ,overflow:'scroll' }} >
            <Box width={300} height={500}>
              <img
                src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                width={300}
              />
              <Typography variant="h5">Product name</Typography>
              <Typography>1999</Typography>
              <Button variant="contained">Buy</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
