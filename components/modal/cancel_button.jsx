import React from "react";

import { Button } from "@mui/material";
import PropTypes from "prop-types";

export function CancelButton({ onClick, open, setOpen, ...props }) {
  return (
    <Button
      onClick={() => {
        setOpen?.(false);
        onClick?.();
      }}
      {...props}
    />
  );
}

CancelButton.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
