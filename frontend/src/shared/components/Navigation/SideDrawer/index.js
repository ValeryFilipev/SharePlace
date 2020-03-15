import React from 'react';

import "./index.css";

const SideDrawer = props => {
  return (
    <aside className="side-drawer">
      {props.children}
    </aside>
  )
};

export default SideDrawer;
