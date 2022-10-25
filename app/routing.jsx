import React from "react";

import { Routes, Route, useOutletContext } from "react-router-dom";

import { Companies } from "root/components/companies";
import { Filters } from "root/components/filters";
import { IndexPage } from "root/components/index_page/index_page";
import { Users } from "root/components/users";

export function Routing() {
  React.useEffect(() => {
    // always reset scroll on page change.
    window.scrollTo(0, 0);
  });

  return (
    <Routes>
      <Route path="users" element={<Users />}>
        <Route path="filters" element={<Filters />}>
          <Route index element={<div>user fields</div>} />
        </Route>
      </Route>
      <Route path="companies" element={<Companies />}>
        <Route path="filters" element={<Filters />}>
          <Route index element={<div>company fields</div>} />
        </Route>
      </Route>
    </Routes>
  );
}
