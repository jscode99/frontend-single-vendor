import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CategoryModal({ open, handleModal }) {
  // console.log(open,handleClose);
  return (
    <Modal
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      open={open}
      onClose={handleModal}
      disableAutoFocus
    >
      <Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Category
        </Typography>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            // border: `1 solid blue`,
            backgroundColor: "whitesmoke",
            padding: `0 0 0 16px`,
            height: "40px",
            marginX: 0,
          }}
          placeholder="Search for products..."
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Box>
    </Modal>
  );
}
