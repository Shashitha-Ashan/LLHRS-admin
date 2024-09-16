// @ts-nocheck
import Papa from "papaparse";
import ImportModuleDTO from "../models/ImportModuleDTO";
import AuthService from "../../../services/AuthService";

const api = AuthService.getInstance();
const BASE_URL = "/modules/";

const importModules = (file: File): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim(),
      transform: (value) => value.trim(),
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

const createModule = async (
  module: ImportModuleDTO
): Promise<ImportModuleDTO> => {
  try {
    const response = await api.post<ImportModuleDTO>(BASE_URL, module);
    return response;
  } catch (error) {
    console.error("Error creating module:", error);
    throw error;
  }
};
const addBulkModules = async (
  modules: ImportModuleDTO[]
): Promise<ImportModuleDTO[]> => {
  try {
    const response = await api.post<ImportModuleDTO[]>(
      `${BASE_URL}add/bulk`,
      modules
    );
    return response;
  } catch (error) {
    console.error("Error creating modules:", error);
    throw error;
  }
};
const fetchDepartments = async () => {
  try {
    const response = await api.get("/department/");
    return response;
  } catch (error) {
    console.error("Error fetching departments:", error);
    throw error;
  }
};
export { importModules, addBulkModules, createModule, fetchDepartments };
