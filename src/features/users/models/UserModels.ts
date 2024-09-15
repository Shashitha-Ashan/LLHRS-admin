export interface UserDTO {
  adminConfirmation: boolean;
  focusArea: string | "N/A";
  _id: string;
  name: string;
  uniEmail: string;
  role: string;
  isVerified: boolean;
  academicYear: string | "N/A";
  department: string | "N/A";
}
