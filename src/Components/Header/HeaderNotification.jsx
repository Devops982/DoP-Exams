import { Badge, IconButton } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
const HeaderNotification = () => {
  return (
    <>
    <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={25} color="error">
            <NotificationsIcon />
            </Badge>
    </IconButton>
    </>
  )
}

export default HeaderNotification