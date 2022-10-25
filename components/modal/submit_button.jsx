import React from "react";

import { LoadingButton } from "@mui/lab";
import PropTypes from "prop-types";

export function SubmitButton({ open, setOpen, children, ...other }) {
  return (
    <LoadingButton variant="contained" color="primary" {...other}>
      {children}
    </LoadingButton>
  );
}

SubmitButton.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  loading: PropTypes.bool,
  children: PropTypes.any.isRequired,
};
