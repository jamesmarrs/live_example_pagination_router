import React from "react";

import { DialogActions, Box } from "@mui/material";
import PropTypes from "prop-types";

export function ActionBox({ children, open, setOpen }) {
  return (
    <DialogActions disableSpacing>
      <Box px={2} py={1} display="flex" width="100%">
        {React.Children.map(children, (c) =>
          React.cloneElement(c, { open, setOpen, sx: { marginRight: 2 } })
        )}
      </Box>
    </DialogActions>
  );
}

ActionBox.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  children: PropTypes.any.isRequired,
};
