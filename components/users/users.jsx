import React from "react";

import { Box, Typography } from "@mui/material";
import { TablePagination } from "@mui/material";
import PropTypes from "prop-types";

import { IndexPage } from "root/components/index_page";
import { Table } from "root/components/table";
import { useRequestBuilder } from "root/hooks/use_request_builder";

// import { Header } from "./header";
// import { Row } from "./row";

const DEFAULT_PAGINATION = {
  page: 1,
  perPage: 5,
  totalPages: 1,
  totalEntries: 0,
};

// export function Users({ title = "Users Index!" }) {
//   const [pagination, setPagination] = React.useState(DEFAULT_PAGINATION);
//   const [users, setUsers] = React.useState([]);
//   const [fetch, loading] = useRequestBuilder(
//     "GET",
//     "http://localhost:5000/api/users.json"
//   );

//   console.log("rendered users!", { loading, users });

//   const fetchUsers = React.useCallback(
//     function (params) {
//       fetch(params).then((res) => {
//         setUsers(res.body.data);
//         setPagination(res.body.pagination);
//       });
//     },
//     [fetch]
//   );

//   // fetch data on component mount.
//   React.useEffect(() => {
//     fetchUsers(DEFAULT_PAGINATION);
//   }, [fetchUsers]);

//   // fetch data with new page!
//   function onChangePage(e, page) {
//     fetchUsers({ ...pagination, page: ++page });
//   }

//   // fetch data with first page and new perPage!
//   function onChangeRowsPerPage(e) {
//     fetchUsers({ ...pagination, page: 1, perPage: e.target.value });
//   }

//   return (
//     <Box p={4}>
//       <Typography>{title}</Typography>
//       <Table loading={loading} data={users} />
//       <TablePagination
//         component="div"
//         count={pagination.totalEntries}
//         onPageChange={onChangePage}
//         page={pagination.page - 1}
//         rowsPerPage={pagination.perPage}
//         rowsPerPageOptions={[5, 10, 20]}
//         labelRowsPerPage="Per Page:"
//         onRowsPerPageChange={onChangeRowsPerPage}
//       />
//     </Box>
//   );
// }

export function Users() {
  return <IndexPage />;
}

Users.propTypes = {
  title: PropTypes.string,
};
