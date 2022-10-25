import React from "react";

import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

import { IndexPage } from "root/components/index_page";

import { Header } from "./header";
import { Row } from "./row";

export function Companies() {
  return (
    <IndexPage
      title="Companies Index!!!!!"
      url="http://localhost:5000/api/companies.json"
      Header={Header}
      Row={Row}
    />
  );
}

Companies.propTypes = {};
