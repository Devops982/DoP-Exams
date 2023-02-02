import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
//import { tokens } from "../../theme";
import { mockDataContacts } from "./mockData";
import { useField } from "formik";
//import Header from "../../components/Header";
//import { useTheme , Typography} from "@mui/material";

const DataGridInformation = (
  {
    rows,
    columns
  }
) => {
 

  return (
    <Box m="2px">

      <Box
        m="5px 0 0 0"
        height="75vh"

      >
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default DataGridInformation;
