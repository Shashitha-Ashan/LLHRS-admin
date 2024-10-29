import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect, useState } from "react";
import timeSlotsSummaryService from "../services/timeSlotsSummary";
import SummaryResponseDTO from "../model/summaryModel";
import { CircularProgress, Box } from "@mui/material";

export default function SummaryBarChart() {
  const [summary, setSummary] = useState<SummaryResponseDTO[] | undefined>(
    undefined
  );
  const [series, setSeries] = useState<any[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const timeSlotSummary = await timeSlotsSummaryService().getSummary();
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      setSummary(timeSlotSummary);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!summary) return;

    const emptySummary = {
      rescheduledCount: 0,
      ordinaryCount: 0,
      cancelledCount: 0,
      extraCount: 0,
    };

    const firstYear = summary.find((s) => s._id === 1) || emptySummary;
    const secondYear = summary.find((s) => s._id === 2) || emptySummary;
    const thirdYear = summary.find((s) => s._id === 3) || emptySummary;
    const fourthYear = summary.find((s) => s._id === 4) || emptySummary;

    const newSeries = [
      {
        label: "Rescheduled",
        data: [
          firstYear.rescheduledCount,
          secondYear.rescheduledCount,
          thirdYear.rescheduledCount,
          fourthYear.rescheduledCount,
        ],
      },
      {
        label: "Ordinary",
        data: [
          firstYear.ordinaryCount,
          secondYear.ordinaryCount,
          thirdYear.ordinaryCount,
          fourthYear.ordinaryCount,
        ],
      },
      {
        label: "Cancelled",
        data: [
          firstYear.cancelledCount,
          secondYear.cancelledCount,
          thirdYear.cancelledCount,
          fourthYear.cancelledCount,
        ],
      },
      {
        label: "Extra",
        data: [
          firstYear.extraCount,
          secondYear.extraCount,
          thirdYear.extraCount,
          fourthYear.extraCount,
        ],
      },
    ];
    setSeries(newSeries);
  }, [summary]);

  return loading ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <CircularProgress />
    </Box>
  ) : (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
        },
        { label: "Years" },
      ]}
      series={series || []}
      width={800}
      height={600}
      yAxis={[{ label: "" }]}
    />
  );
}
