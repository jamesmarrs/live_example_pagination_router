import React from "react";

import { DialogTitle, Typography } from "@mui/material";
import PropTypes from "prop-types";

export function PlainTitle({ children }) {
  return <DialogTitle>{children}</DialogTitle>;
}

PlainTitle.propTypes = {
  children: PropTypes.any.isRequired,
};
