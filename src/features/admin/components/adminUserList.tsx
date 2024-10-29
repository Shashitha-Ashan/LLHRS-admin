import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AdminUser from "../services/adminServices";
import { useEffect, useState } from "react";
import AdminUserDTO from "../model/adminUserDTO";

export default function AdminUserList() {
  const [adminUsers, setAdminUsers] = useState<AdminUserDTO[] | undefined>();
  useEffect(() => {
    const getAdminUsers = async () => {
      const adminUser = AdminUser();
      const adminUsers = await adminUser.getAllAdminUsers();
      setAdminUsers(adminUsers);
    };
    getAdminUsers();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Updated At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminUsers?.map((adminUser) => (
            <TableRow key={adminUser._id}>
              <TableCell component="th" scope="row">
                {adminUser.username}
              </TableCell>
              <TableCell>{adminUser.email}</TableCell>
              <TableCell>{adminUser.role}</TableCell>
              <TableCell>{adminUser.createdAt}</TableCell>
              <TableCell>{adminUser.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
