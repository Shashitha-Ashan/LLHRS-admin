interface SummaryResponseDTO {
  _id: number;
  rescheduledCount: number;
  ordinaryCount: number;
  cancelledCount: number;
  extraCount: number;
}

export default SummaryResponseDTO;
