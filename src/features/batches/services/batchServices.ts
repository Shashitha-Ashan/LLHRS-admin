import AuthService from "../../../services/AuthService";

const api = AuthService.getInstance();
const BASE_URL_FOCUS_AREAS = "/focus-area/";
const BASE_URL_DEPARTMENT = "/department/";
const BASE_URL_ACADEMICYEARS = "/academic-year/";

const getDepartments = async () => {
  const response = await api.get(`${BASE_URL_DEPARTMENT}`);
  return response;
};

const getYears = async () => {
  const response = await api.get(`${BASE_URL_ACADEMICYEARS}`);
  return response;
};

const getFocusAreas = async () => {
  const response = await api.get(`${BASE_URL_FOCUS_AREAS}`);
  return response;
};
const createBatch = async (data: unknown) => {
  const response = await api.post(`${BASE_URL_ACADEMICYEARS}`, data);
  return response;
};

const createFocusArea = async (data: unknown) => {
  const response = await api.post(`${BASE_URL_FOCUS_AREAS}`, data);
  return response;
};

const createDepartment = async (data: unknown) => {
  const response = await api.post(`${BASE_URL_DEPARTMENT}`, data);
  return response;
};

export {
  getDepartments,
  getYears,
  getFocusAreas,
  createBatch,
  createFocusArea,
  createDepartment,
};
