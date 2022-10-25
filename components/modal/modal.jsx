import React from "react";

import { Dialog } from "@mui/material";
import PropTypes from "prop-types";

export function Modal({ open, children, ...other }) {
  return (
    <Dialog open={open} scroll="body" {...other}>
      {children}
    </Dialog>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
};
