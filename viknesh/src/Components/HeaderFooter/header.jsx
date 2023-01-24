//import MailIcon from '@mui/icons-material/Mail';
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
// import Logo from './IPlogo.png';
import Logo from '../../images/IPlogo.png';

function Header() {
  return (
  
  
  <>
      <AppBar position="fixed">
        <Toolbar>
          <img
            src={Logo}
            alt=""
            style={{ width: "110px" }}
          />
          <Typography component={"div"} sx={{ flexGrow: 1 }}>
          <div style={{ fontSize: "14px" }}> </div>
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>             
              DoP Examinations - Employee Portal
            </div>
            
             <div style={{ fontSize: "11px" }}> Government of India </div> 
          </Typography>
          </Toolbar></AppBar>
    </>
  );
}

export default Header;
