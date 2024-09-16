// @ts-nocheck
import { useEffect, useState } from "react";
import { getModules } from "../services/moduleServices";
import { ModuleDTO } from "../models/ModuleDTO";

export const useModules = () => {
  const [modules, setModules] = useState<ModuleDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const data = await getModules();
        setModules(data);
      } catch (err) {
        setError("Failed to fetch modules");
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  return { modules, loading, error };
};
