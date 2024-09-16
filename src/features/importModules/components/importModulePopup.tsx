// @ts-nocheck
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function ImportModulesIntructions({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <strong>Import Modules from CSV</strong>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p style={{ color: "red" }}>
              The following fields are required in the CSV file to import
              modules:
            </p>
            <hr />
            <span>
              <p>
                <strong>
                  <i>Table Columns</i>
                </strong>
              </p>
              <strong>
                <p>
                  |moduleName | moduleCode | NOHours | academicYear | semester|
                </p>
              </strong>
            </span>
            <hr />
            <p>
              <strong>
                <i>Example:</i>
              </strong>
            </p>
            <ul>
              <li>
                <span>
                  <strong>moduleName </strong>
                  <em>ex: Software Engineering I</em>
                </span>
              </li>
              <li>
                <span>
                  <strong>moduleCode </strong>
                  <em>ex: ITC2023</em>
                </span>
              </li>
              <li>
                <span>
                  <strong>academicYear - </strong>
                  <em>ex: 1,2...4</em>
                </span>
              </li>
              <li>
                <span>
                  <strong>semester - </strong>
                  <em>ex: 1,2,...8</em>
                </span>
              </li>
              <li>
                <span>
                  <strong>NOHours - </strong>
                  <em>ex: 20</em>
                </span>
              </li>
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
