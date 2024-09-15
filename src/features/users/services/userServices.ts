import AuthService from "../../../services/AuthService";

const api = AuthService.getInstance();

const getUsers = async () => {
  try {
    const response = await api.get("/user/users");
    return response["users"];
  } catch (error) {
    console.error("Error fetching users: ", error);
    throw error;
  }
};

const createNewUser = async (newUser: unknown) => {
  try {
    const response = await api.post("/user/create", newUser);
    return response;
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  }
};

export { getUsers, createNewUser };
