import { ModuleDTO } from "../models/ModuleDTO";
import AuthService from "../../../services/AuthService";

const api = AuthService.getInstance();

const BASE_URL = "/modules/";

export const getModules = async (): Promise<ModuleDTO[]> => {
  try {
    const response = await api.get<ModuleDTO[]>(BASE_URL);
    return response;
  } catch (error) {
    console.error("Error fetching modules:", error);
    throw error;
  }
};

export const getModuleById = async (id: string): Promise<ModuleDTO> => {
  try {
    const response = await api.get<ModuleDTO>(`${BASE_URL}/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching module:", error);
    throw error;
  }
};
