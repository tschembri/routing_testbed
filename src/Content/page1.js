import React from "react";
import { NavLink } from "react-router-dom";

function Content() {
  return (
    <>
      <p> page 1</p>
      <NavLink
        to={{
          pathname: "/page2",
          state: {
            haha: "true"
          }
        }}
      >
        Goto page 2
      </NavLink>
    </>
  );
}

export default Content;
