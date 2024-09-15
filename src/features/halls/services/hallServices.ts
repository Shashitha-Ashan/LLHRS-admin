import AuthService from "../../../services/AuthService";
import Hall from "../models/hallModel";

const api = AuthService.getInstance();
const BASE_URL_HALLS = "/halls/";

const getAllHalls = async () => {
  try {
    return await api.get<[Hall]>(BASE_URL_HALLS);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createHall = async (hall: unknown) => {
  const data = {
    hallName: hall.name,
    NOSeats: hall.capacity,
    hallType: hall.type,
  };
  try {
    return await api.post(`${BASE_URL_HALLS}`, data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// const updateHall = async (hall: unknown) => {
//     return await api.put(BASE_URL_HALLS, hall);
// }

export {
  getAllHalls,
  createHall,
  // updateHall,
};
