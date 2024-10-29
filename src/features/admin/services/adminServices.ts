import AuthService from "../../../services/AuthService";
import AdminUserDTO from "../model/adminUserDTO";

export default function AdminUser() {
  const api = AuthService.getInstance();
  const baseUrl = "/admin";

  const getAllAdminUsers = async (): Promise<AdminUserDTO[] | undefined> => {
    try {
      const response: any = await api.get(`${baseUrl}/all`);
      const data = response as AdminUserDTO[];
      return data;
    } catch (error) {
      console.error("Error fetching time slots summary", error);
      return undefined;
    }
  };

  return {
    getAllAdminUsers,
  };
}
