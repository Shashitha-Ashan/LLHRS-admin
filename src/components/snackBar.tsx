import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function SimpleSnackbar({
  open,
  onClose,
  bkgColor,
  note,
}: {
  open: boolean;
  onClose: () => void;
  bkgColor: string;
  note: string;
}) {
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={onClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        action={action}
        message={note}
        ContentProps={{
          sx: { backgroundColor: bkgColor },
        }}
      />
    </div>
  );
}
