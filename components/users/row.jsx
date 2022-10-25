import React from "react";

import { TableRow, TableCell } from "@mui/material";
import PropTypes from "prop-types";

export function Row({ firstName, lastName, email, roles }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {firstName}
      </TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{roles.includes("admin").toString()}</TableCell>
    </TableRow>
  );
}

Row.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  roles: PropTypes.array,
};
