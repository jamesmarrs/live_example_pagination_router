import React from "react";

import { TableRow, TableCell } from "@mui/material";
import PropTypes from "prop-types";

export function Row({ id, name }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
    </TableRow>
  );
}

Row.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};
