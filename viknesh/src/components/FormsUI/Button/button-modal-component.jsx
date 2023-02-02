import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import DangerousRoundedIcon from "@mui/icons-material/DangerousRounded";
import ProfileVerification from "views/pages/ProfileVerification";
import ProfileVerifiedSuccess from "views/pages/ProfileVerifiedSuccess";

const style = {
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // width: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  //boxShadow: 24,
  // p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  position: "absolute",
  top: "5%",
  left: "5%",
  right:"5%",
  overflow: "scroll",
  height: "100%",
  display: "block",


  maxHeight: 700,

};
const ButtonModal = ({color, label , icon, ...otherProps}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} color={color}>
        {label === "Pending" ? (
          <DangerousRoundedIcon />
        ) : (
          <VerifiedUserRoundedIcon />
        )}
        {label}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
        {label === "Pending" ? (
           <ProfileVerification />
        ) : (
         <ProfileVerifiedSuccess />
        )}
      
         
         
        </Box>
      </Modal>
    </div>
  );
}


export default ButtonModal;