import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
//import { tokens } from "../../theme";
import { mockDataContacts } from "./mockData";
import { useField } from "formik";
//import Header from "../../components/Header";
//import { useTheme , Typography} from "@mui/material";

const DataGridInformation = () => {
 
  //const theme = useTheme();
  //const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Employee",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="2px">

      <Box
        m="5px 0 0 0"
        height="75vh"

      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default DataGridInformation;
