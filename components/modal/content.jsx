import React from "react";

import { DialogContent } from "@mui/material";
import PropTypes from "prop-types";

export function Content({ children }) {
  return <DialogContent dividers={true}>{children}</DialogContent>;
}

Content.propTypes = {
  children: PropTypes.any.isRequired,
};
