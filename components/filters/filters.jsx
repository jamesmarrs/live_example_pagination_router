import React from "react";

import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { Outlet, useOutletContext } from "react-router-dom";

import {
  RouterModal,
  PlainTitle,
  Content,
  ActionBox,
  CancelButton,
  SubmitButton,
} from "root/components/modal";

export function Filters() {
  const [search, setSearch] = React.useState("");
  const { fetchModels, pagination } = useOutletContext();
  const formId = React.useId();

  function onSubmit(e) {
    e.preventDefault();
    fetchModels({ ...pagination, search, page: 1 });
    console.log("do something!");
  }

  return (
    <RouterModal backUrl="../." fullWidth>
      <PlainTitle>Filter Index</PlainTitle>
      <Content>
        <form id={formId} onSubmit={onSubmit}>
          <TextField
            label="Search"
            search={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Outlet />
        </form>
      </Content>
      <ActionBox>
        <CancelButton disabled={false}>Cancel</CancelButton>
        <SubmitButton type="submit" form={formId} loading={false}>
          Search
        </SubmitButton>
      </ActionBox>
    </RouterModal>
  );
}

Filters.propTypes = {};
