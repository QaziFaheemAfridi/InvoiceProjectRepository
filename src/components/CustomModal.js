import React from "react";
import { Modal, Box, Typography, Button } from "@material-ui/core";
import "./CustomModal.css"; // Import CSS file for custom styles

const CustomModal = ({ handleClose, open, invoiceId, customerName }) => {
    const custstyle = invoiceId === "" || customerName === "" ? "myscustimestylered" : "myscustimestylegreen";
  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="custom-modal">
        <Typography variant="h6" className={custstyle}>Invoice Details</Typography>
        <Typography>Invoice ID: {invoiceId}</Typography>
        <Typography>Customer Name: {customerName}</Typography>
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
