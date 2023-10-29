import { Box, Grid, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react'

const Footer = () => {
  return (
    <>
    <Grid container sx={{ display:'flex', justifyContent:'space-between', p:5, backgroundColor:'black',color:'white' }}>
        <Grid item sx={{  }}>
            <Typography variant='h4'>Company</Typography>
            <Typography>
                Lorem, ipsum dolor.
            </Typography>
        </Grid>
        <Grid item sx={{  }}>
            <Typography variant='h4'>Quick Link</Typography>
        </Grid>
        <Grid item sx={{  }}>
            <Typography variant='h4'>Privacy Policy</Typography>
        </Grid>
        <Grid item sx={{  }}>
            <Typography variant='h4'>Follow Us</Typography>
            <Box sx={{ display:'flex', justifyContent:'center' }}>
                <InstagramIcon/>
                <FacebookIcon/>
                <TwitterIcon/>

            </Box>
        </Grid>
    </Grid>
    <Grid container sx={{ display:'flex' , justifyContent:'center', p:5,backgroundColor:'black',color:'white' }}>
    <Typography sx={{ textAlign:'center' }} variant='p'>Copyright © 2023 Flipmart | All rights reserved</Typography>
    </Grid>
    </>
  )
}

export default Footer
