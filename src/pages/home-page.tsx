import { Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

function Home() {
  return (
    <div>
      <Typography
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        Month Summary
      </Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <BarChart
          xAxis={[
            {
              scaleType: "band",

              data: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
            },
            { label: "Years" },
          ]}
          series={[
            { data: [4, 3, 5, 10] },
            { data: [1, 6, 3, 12] },
            { data: [2, 5, 6, 5] },
          ]}
          width={600}
          height={500}
          yAxis={[{ label: "" }]}
        />
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "1st Year" },
                { id: 1, value: 15, label: "2nd Year" },
                { id: 2, value: 20, label: "3rd Year" },
                { id: 2, value: 20, label: "4th Year" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
    </div>
  );
}
export default Home;
