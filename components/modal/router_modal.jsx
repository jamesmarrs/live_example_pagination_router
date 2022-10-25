import React from "react";

import PropTypes from "prop-types";
import { useNavigate, useOutletContext } from "react-router-dom";

import { ActionBox } from "./action_box";
import { Modal } from "./modal";

export function RouterModal({ children, backUrl, ...other }) {
  const context = useOutletContext();
  // set backUrl if not defined.
  backUrl ||= context?.backUrl;
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      TransitionProps={{ onExited: () => navigate(backUrl) }}
      {...other}
    >
      {React.Children.map(children, (c) =>
        c.type == ActionBox ? React.cloneElement(c, { open, setOpen }) : c
      )}
    </Modal>
  );
}

RouterModal.propTypes = {
  backUrl: PropTypes.string,
  children: PropTypes.any.isRequired,
};
