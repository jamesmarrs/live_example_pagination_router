import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { TablePagination } from "@mui/material";
import PropTypes from "prop-types";
import { Outlet, useNavigate } from "react-router-dom";

import { Table } from "root/components/table";
import { Header as DefaultHeader } from "root/components/users/header";
import { Row as DefaultRow } from "root/components/users/row";
import { useRequestBuilder } from "root/hooks/use_request_builder";

const DEFAULT_TABLE_PROPS = {
  component: "div",
  rowsPerPageOptions: [5, 10, 900],
  labelRowsPerPage: "Per Page:",
};

const DEFAULT_PAGINATION = {
  page: 1,
  perPage: 5,
  totalPages: 1,
  totalEntries: 0,
};

export function IndexPage({
  title = "User Index!",
  url = "http://localhost:5000/api/users.json",
  Header = DefaultHeader,
  Row = DefaultRow,
}) {
  const navigate = useNavigate();
  const [pagination, setPagination] = React.useState(DEFAULT_PAGINATION);
  const [fetch, loading] = useRequestBuilder("GET", url);
  const [models, setModels] = React.useState([]);

  const fetchModels = React.useCallback(
    function (params) {
      fetch(params).then((res) => {
        setModels(res.body.data);
        setPagination(res.body.pagination);
      });
    },
    [fetch]
  );

  // useEffect to fetch data on mount.
  React.useEffect(() => {
    fetchModels(DEFAULT_PAGINATION);
  }, [fetchModels]);

  console.log("rendered models!", { loading, models });

  // fetch data with new page!
  function onChangePage(e, page) {
    fetchModels({ ...pagination, page: ++page });
  }

  // fetch data with first page and new perPage!
  function onChangeRowsPerPage(e) {
    fetchModels({ ...pagination, page: 1, perPage: e.target.value });
  }

  return (
    <Box p={4}>
      <Typography>{title}</Typography>
      <Button onClick={() => navigate("filters")} variant="outlined">
        Add Filters
      </Button>
      <Table loading={loading} data={models} Header={Header} Row={Row} />
      <TablePagination
        count={pagination.totalEntries}
        onPageChange={onChangePage}
        page={pagination.page - 1}
        rowsPerPage={pagination.perPage}
        onRowsPerPageChange={onChangeRowsPerPage}
        {...DEFAULT_TABLE_PROPS}
      />
      <Outlet context={{ fetchModels, pagination }} />
    </Box>
  );
}

IndexPage.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  Header: PropTypes.func,
  Row: PropTypes.func,
};
