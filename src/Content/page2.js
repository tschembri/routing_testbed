import React from "react";
import { NavLink } from "react-router-dom";

function Content() {
  return (
    <>
      <p> page 2</p>
      <NavLink
        to={{
          pathname: "/page1",
          state: {
            haha: "true"
          }
        }}
      >
        Goto page 1
      </NavLink>
    </>
  );
}

export default Content;
