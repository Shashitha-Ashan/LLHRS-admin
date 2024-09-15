import { useEffect, useState } from "react";
import { getUsers } from "../services/userServices";
import { UserDTO } from "../models/UserModels";

export const useUsers = () => {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to fetch modules");
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  return { users, loading, error };
};
