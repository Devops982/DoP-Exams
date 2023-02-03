import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataGridInformation from "../DataTable/datatable-component";

import { PromotionDetails } from "../../ModelData";

import ButtonModal from "../Button/button-modal-component";

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

export default function PromotionTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const verifiedProfile = PromotionDetails.filter((e) =>
    e.promotionVerificationStatus.includes("Verified")
  );

  const pendingVerificationProfile = PromotionDetails.filter((e) =>
    e.promotionVerificationStatus.includes("Pending")
  );

  const columns = [
    { field: "employeeNumber", headerName: "Employee Number", flex: 1 },
    { field: "employeeName", headerName: "Employee Name", flex: 1 },
    { field: "cadre", headerName: "Present Cadre", flex: 1 },
    { field: "cadreNew", headerName: "Promoted Cadre", flex: 1 },

    { field: "officeStatus", headerName: "Present Office", flex: 1 },
    { field: "officeStatusNew", headerName: "Promoted Office", flex: 1 },
    { field: "parentCircle", headerName: "Present Circle", flex: 1 },
    { field: "parentCircleNew", headerName: "Promoted Circle", flex: 1 },

    {
      field: "promotionVerificationStatus",
      headerName: "Verification Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { promotionVerificationStatus } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            {promotionVerificationStatus === "Verified" && (
              <ButtonModal
                color="success"
                label="Verified"
                pageName="PromotionVerification"
              />
            )}
            {promotionVerificationStatus === "Pending" && (
              <ButtonModal
                color="error"
                label="Pending"
                pageName="PromotionVerification"
              />
            )}
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <AppBar position="static">
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
        <DataGridInformation rows={PromotionDetails} columns={columns} />
      </TabPanel>
    </Box>
  );
}
