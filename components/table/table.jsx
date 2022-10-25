import React from "react";

import {
  Box,
  LinearProgress,
  TableContainer,
  Paper,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import PropTypes from "prop-types";

import { Header as DefaultHeader } from "root/components/users/header";
import { Row as DefaultRow } from "root/components/users/row";

export function Table({
  loading = false,
  Header = DefaultHeader,
  Row = DefaultRow,
  data,
}) {
  return (
    <Box>
      <Box sx={{ visibility: !!loading ? null : "hidden" }}>
        <LinearProgress />
      </Box>
      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <Header />
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((child) => (
              <Row key={child.id} {...child} />
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
}

Table.propTypes = {
  Header: PropTypes.func,
  Row: PropTypes.func,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};
