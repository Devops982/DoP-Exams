import { Grid } from '@mui/material'
import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header/Header'

import ProfileAccount from '../Components/ProfileAccount'
import SideDrawer from '../Components/SideDrawer'


const Profile = () => {
  return (
    <>
    <Header/>
            <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
                <SideDrawer/>
            </Grid>
            <Grid item xs={12} md={10}>
                <ProfileAccount/>
            </Grid>
        </Grid>
   
    <Footer/>    
    </>
    
  )
}

export default Profile