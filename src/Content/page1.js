import React from "react";
import { NavLink } from "react-router-dom";

function Content(props) {
  if (typeof props.location.state === "undefined") {
    // color is undefined
  } else {
    const { haha } = props.location.state;
  }
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
