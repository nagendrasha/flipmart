'use client'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
  const router = useRouter();
  return (
    <div>
        <Box sx={{flexGrow:1}}>
        <AppBar position='static' sx={{ backgroundColor:'black' }} >
            <Toolbar sx={{justifyContent:'space-between'}}>
                <Typography variant='h4' onClick={()=>{router.push('/')}}>FlipMart</Typography>
                  <Box sx={{display:'flex',}} >
                    <Typography variant='h5' sx={{pl:3}} onClick={()=>{router.push('/shop')}}>Shop</Typography>
                    <Typography variant='h5' sx={{pl:3}} onClick={()=>{router.push('/contact')}}>Contact</Typography>
                    <Button variant='outlined' sx={{ml:3}} onClick={()=>{router.push('/login')}}>Login</Button>
                    {/* <Typography variant='h5' sx={{pl:3}} >
                      <Link href={"/about/me"}>Shivam</Link>
                    </Typography> */}
                  </Box>
            </Toolbar>
        </AppBar>
        </Box>
    </div>
  )
}

export default Header
