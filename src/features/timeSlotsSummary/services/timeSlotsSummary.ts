import AuthService from "../../../services/AuthService";
import SummaryResponseDTO from "../model/summaryModel";

export default function timeSlotsSummaryService() {
  const api = AuthService.getInstance();
  const baseUrl = "/summary";

  const getSummary = async (): Promise<SummaryResponseDTO[] | undefined> => {
    try {
      const response: any = await api.get(`${baseUrl}/semester-summary`);
      const data = response.summary as SummaryResponseDTO[];
      return data;
    } catch (error) {
      console.error("Error fetching time slots summary", error);
      return undefined;
    }
  };

  return {
    getSummary,
  };
}
