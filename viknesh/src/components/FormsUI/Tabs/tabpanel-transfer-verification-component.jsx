import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataGridInformation from "../DataTable/datatable-component";
import { yellow } from '@mui/material/colors';



import { TransferDetails } from "../../ModelData";

import ButtonModal from "../Button/button-modal-component";
import { TextField } from "@mui/material";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
  };
}

export default function TransferTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const warningModal = yellow[800];


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const verifiedProfile = TransferDetails.filter((e) =>
    e.transferVerificationStatus.includes("Verified")
  );

  const pendingVerificationProfile = TransferDetails.filter((e) =>
    e.transferVerificationStatus.includes("Pending")
  );

  const columns = [
    { field: "employeeNumber", headerName: "Employee Number", flex: 1 },
    { field: "employeeName", headerName: "Employee Name", flex: 1 },
    { field: "cadre", headerName: "Cadre" },
    { field: "officeStatus", headerName: "Present Office" },
    { field: "officeStatusNew", headerName: "Transferred Office" },
    { field: "parentDivision", headerName: "Present Division" },
    { field: "parentDivisionNew", headerName: "Transferred Division" },

    {
      field: "transferVerificationStatus",
      headerName: "Verification Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { transferVerificationStatus } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            {transferVerificationStatus === "Verified" && (
              <ButtonModal
                color="success"
                label="Verified"
                pageName="TransferVerification"
              />

        
            )}
            {transferVerificationStatus === "Pending" && (
              <ButtonModal
               
                color = "warning"
                label="Pending"
                pageName="TransferVerification"
              />
            )}
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <AppBar position="static" >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Pending Verification" />
          <Tab label="Verified" />
          <Tab label="All " />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <DataGridInformation
          rows={pendingVerificationProfile}
          columns={columns}
        />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <DataGridInformation rows={verifiedProfile} columns={columns} />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <DataGridInformation rows={TransferDetails} columns={columns} />
      </TabPanel>
    </Box>
  );
}
