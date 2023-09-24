import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Form from "./Form";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  selected: { id: number; title: string; text: string; date: string };
  handleClose: () => void;
  handleOpen: () => void;
}

const EditModal = ({ open, selected, handleClose, handleOpen }: Props) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form selected={selected} />
        </Box>
      </Modal>
    </div>
  );
};

export default EditModal;
