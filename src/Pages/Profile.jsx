import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header/Header'

import ProfileAccount from '../Components/ProfileAccount'
import SideDrawer from '../Components/SideDrawer'



const Profile = () => {
 
  return (
    <>
    <Header/>
    <Container  maxWidth="sm md">
    <Grid container spacing={2} >
      <Grid item xs={12} md={3} >
        <SideDrawer/>
      </Grid>
      <Grid item xs={12} md={9}>
        <ProfileAccount/>
      </Grid>
    </Grid>
    </Container>
    
   
    <Footer/>    
    </>
    
  )
}

export default Profile