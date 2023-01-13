import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ComponentSideBar from '../Components/Component-SideBar'
import Footer from '../Components/Footer'
import Header from '../Components/Header/Header'

import ProfileAccount from '../Components/ProfileAccount'
import SideDrawer from '../Components/SideDrawer'



const Profile = () => {
 
  return (
    <>
    
    
    <Container  maxWidth="sm md" >
    <Header/>
    
    
    <Grid container spacing={2} >
      <Grid item xs={12} md={3} >
      <ComponentSideBar/>      
        
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