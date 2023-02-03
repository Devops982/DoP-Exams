import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import DangerousRoundedIcon from "@mui/icons-material/DangerousRounded";
import ProfileVerification from "views/pages/ProfileVerification";
import ProfileVerifiedSuccess from "views/pages/ProfileVerifiedSuccess";
import TransferVerification from "views/pages/TransferVerification";
import TransferVerifiedSuccess from "views/pages/TransferVerifiedSuccess";
import PromotionVerification from "views/pages/PromotionVerification";
import { Dashboard } from "@mui/icons-material";
import PromotionVerifiedSuccess from "views/pages/PromotionVerifiedSuccess";
import VisibilityIcon from "@mui/icons-material/Visibility";

const style = {
  
  bgcolor: "background.paper",
  border: "2px solid #000",
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
const ButtonModal = ({color, label , pageName, ...otherProps}) => {

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
        <VisibilityIcon color="secondary" fontSize="small" />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {pageName === "ProfileVerification" && label === "Pending" ? (
            <ProfileVerification />
          ) : pageName === "ProfileVerification" && label === "Verified" ? (
            <ProfileVerifiedSuccess />
          ) : pageName === "TransferVerification" && label === "Pending" ? (
            <TransferVerification />
          ) : pageName === "TransferVerification" && label === "Verified" ? (
            <TransferVerifiedSuccess />
          ) : pageName === "PromotionVerification" && label === "Pending" ? (
            <PromotionVerification />
          ) : pageName === "PromotionVerification" && label === "Verified" ? (
            <PromotionVerifiedSuccess />
          ) : (
            <Dashboard />
          )}
        </Box>
      </Modal>
    </div>
  );
}


export default ButtonModal;