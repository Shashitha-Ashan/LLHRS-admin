import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { getAllHalls } from "../services/hallServices";

const HallData = () => {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    const fetchHalls = async () => {
      const halls = await getAllHalls();
      setHalls(halls);
    };
    fetchHalls();
  }, []);
  const columns = [
    { field: "hallName", headerName: "Hall Name", width: 250 },
    { field: "NOSeats", headerName: "Capacity", width: 100 },
    { field: "hallType", headerName: "Type", width: 150 },
  ];

  return (
    <DataGrid
      rows={halls}
      columns={columns}
      pageSize={5}
      getRowId={(row) => row._id}
      rowsPerPageOptions={[5, 10, 20]}
      pageSizeOptions={[5, 10]}
      initialState={{ page: 0, pageSize: 5 }}
    />
  );
};

export default HallData;
