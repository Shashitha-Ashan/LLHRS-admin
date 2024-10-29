import { SetStateAction, useState } from "react";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import SummaryBarChart from "../features/timeSlotsSummary/components/summaryBarChart";
// import { PieChart } from "@mui/x-charts/PieChart";

function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (_: any, newValue: SetStateAction<number>) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 3,
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Month Summary
      </Typography>

      <Tabs
        value={selectedTab}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="summary tabs"
        centered
      >
        <Tab label="ICT" />
        <Tab label="EGT" />
        <Tab label="BST" />
      </Tabs>

      <Box
        sx={{ padding: 2, textAlign: "center", width: "100%", maxWidth: 600 }}
      >
        {selectedTab === 0 && <SummaryBarChart />}
        {selectedTab === 1 && <Typography>No data</Typography>}
        {selectedTab === 2 && <Typography>No data</Typography>}
      </Box>
    </Box>
  );
}

export default Home;
