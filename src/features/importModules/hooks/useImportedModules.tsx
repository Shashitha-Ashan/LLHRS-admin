/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import { useState } from "react";
import ImportModuleDTO from "../models/ImportModuleDTO";
import {
  importModules,
  addBulkModules,
  createModule,
  fetchDepartments,
  getFocusAreaByDepartment,
} from "../services/importModuleServices";

export const useImportedModules = (csvFile: File | null) => {
  const [modules, setModules] = useState<ImportModuleDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [departments, setDepartments] = useState([]);

  const loadCSV = async (file) => {
    setLoading(true);
    try {
      const data = await importModules(file);
      setModules(data);
    } catch (err) {
      setError("Failed to load modules");
    } finally {
      setLoading(false);
    }
  };
  const createModules = async (modules: ImportModuleDTO[]) => {
    setLoading(true);
    try {
      await addBulkModules(modules);
    } catch (err) {
      setError("Failed to create modules");
    } finally {
      setLoading(false);
    }
  };
  const createNewModule = async (module: ImportModuleDTO) => {
    setLoading(true);
    try {
      await createModule(module);
    } catch (err) {
      setError("Failed to create module");
    } finally {
      setLoading(false);
    }
  };
  const getDepartments = async () => {
    setLoading(true);
    try {
      const data = await fetchDepartments();
      return data;
    } catch (err) {
      setError("Failed to load departments");
    } finally {
      setLoading(false);
    }
  };
  const getFocusAreaByDepartment = async (department: string) => {
    setLoading(true);
    try {
      const data = await getFocusAreaByDepartment(department);
      return data;
    } catch (err) {
      setError("Failed to load focus areas");
    } finally {
      setLoading(false);
    }
  };
  return {
    modules,
    loading,
    error,
    departments,
    loadCSV,
    createModules,
    createNewModule,
    getDepartments,
    getFocusAreaByDepartment,
  };
};
