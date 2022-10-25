import React from "react";

import { TableCell } from "@mui/material";
import PropTypes from "prop-types";
const HEADER_CELLS = ["Name"];

export function Header() {
  return HEADER_CELLS.map((headerCell) => (
    <TableCell key={headerCell}>{headerCell}</TableCell>
  ));
}

Header.propTypes = {};
