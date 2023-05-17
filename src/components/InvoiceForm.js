// InvoiceForm.js

import React, { useState } from "react";
import CustomModal from "./CustomModal";

const InvoiceForm = () => {
  const [invoiceId, setInvoiceId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleInvoiceIdChange = (e) => {
    setInvoiceId(e.target.value);
  };

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Invoice Form</h1>
      <form>
        <label>
          Invoice ID:
          <input
            type="text"
            value={invoiceId}
            onChange={handleInvoiceIdChange}
          />
        </label>
        <br />
        <label>
          Customer Name:
          <input
            type="text"
            value={customerName}
            onChange={handleCustomerNameChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleOpenModal}>
          Open Modal
        </button>
      </form>
      <CustomModal
        open={modalOpen}
        handleClose={handleCloseModal}
        invoiceId={invoiceId}
        customerName={customerName}
      />
    </div>
  );
};

export default InvoiceForm;
