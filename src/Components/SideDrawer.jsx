import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';



const SideDrawer = () => {
  
       
    
     
  return (
    <>  
    <Paper
    elevation={5}
    sx={{
      padding: "2rem",
      marginTop: "1rem",
      border: "1px solid #2673E2",
    }}
    >
      <List>
            {['Part 1 Registration', 'Part 2 Registration', 'Update Transfer', 'Update Promotion'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
                <Divider />
              </ListItem>
              
            ))}
          </List>
          <Divider />
          <List>
            {['Apply for Exam', 'View Applied Exams', 'View Profile'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              
            ))}
          </List>
    </Paper>
          
          
      
    </>
    
  )
}

export default SideDrawer