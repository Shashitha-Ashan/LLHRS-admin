import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import {
  getYears,
  deleteBatches,
  startNewAcademicYear,
} from "../services/batchServices";
import DangerousIcon from "@mui/icons-material/Dangerous";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SimpleSnackbar from "../../../components/snackBar";
import {
  editButtonColor,
  deleteButtonColor,
  newRecordButtonColor,
} from "../../../styles/buttonColors";
import EditPopup from "./editPopup";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

const AcademicYears = () => {
  const [years, setYears] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    const fetchYears = async () => {
      const years = await getYears();
      // @ts-ignore
      setYears(years);
    };
    fetchYears();
  }, []);
  const columns = [
    { field: "year", headerName: "Year", width: 90 },
    { field: "academicYear", headerName: "Name", width: 150 },
  ];
  // @ts-ignore
  const handleRowSelection = (newSelection) => {
    setSelectedRows(newSelection);
  };
  const handleDelete = async () => {
    try {
      await deleteBatches(selectedRows);
      setOpen(true);
      setSelectedRows([]);
    } catch (error) {
      console.error("Error deleting academic year", error);
    }
  };
  const startAcademicYear = async () => {
    try {
      await startNewAcademicYear();
      setOpen(true);
    } catch (error) {
      console.error("Error starting new academic year", error);
    }
  };
  return (
    <>
      {open && (
        <SimpleSnackbar
          bkgColor={"#ffa200"}
          note={"Please check your email for confirmation"}
          onClose={() => setOpen(false)}
          open={open}
        />
      )}
      {editOpen && (
        <EditPopup
          open={editOpen}
          onClose={() => setEditOpen(false)}
          selectedId={selectedRows[0]}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: "10px", backgroundColor: newRecordButtonColor }}
      >
        <AddIcon /> Add Academic Year
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ ml: "10px", mb: "10px", backgroundColor: deleteButtonColor }}
        disabled={selectedRows.length === 0}
        onClick={handleDelete}
      >
        <DangerousIcon /> Delete Academic Year
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ ml: "10px", mb: "10px", backgroundColor: editButtonColor }}
        disabled={selectedRows.length === 0 || selectedRows.length > 1}
        onClick={() => setEditOpen(true)}
      >
        <EditIcon /> Edit Academic Year
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ ml: "10px", mb: "10px", backgroundColor: deleteButtonColor }}
        onClick={startAcademicYear}
      >
        <SystemUpdateAltIcon /> Start new Academic Year
      </Button>
      <DataGrid
        rows={years}
        columns={columns}
        pageSize={5}
        // @ts-ignore
        getRowId={(row) => row._id}
        pageSizeOptions={[5, 10]}
        // @ts-ignore
        initialState={{ page: 0, pageSize: 5 }}
        checkboxSelection
        selectionModel={selectedRows}
        onRowSelectionModelChange={handleRowSelection}
        hideFooterSelectedRowCount={true}
        loading={years.length === 0}
      />
    </>
  );
};

export default AcademicYears;
