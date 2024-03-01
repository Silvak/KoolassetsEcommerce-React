import { useBoundStore } from "@/stores/index";
import { Box, Modal } from "@mui/material";
import React from "react";
import { shallow } from "zustand/shallow";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: "750px" },
  maxHeight: "90vh",
  overflowY: "auto",
  p: "10px",
  borderRadius: "6px",
  background: "#FFF",
};

export default function ModalGlobal() {
  const { stateModal, contentModal } = useBoundStore((state) => state, shallow);

  return (
    <Modal
      open={stateModal}
      disableEnforceFocus
      sx={{
        ".css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
          backgroundColor: "rgb(0 0 0 /30%)",
          backdropFilter: "blur(3px)",
        },
      }}
    >
      <Box sx={style}>{contentModal}</Box>
    </Modal>
  );
}
