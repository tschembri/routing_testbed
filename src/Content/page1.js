import React from "react";
import { NavLink } from "react-router-dom";

function Content(props) {
  let haha = "1";

  if (haha === "undefined") {
    haha = "2";
  } else {
    haha = "3";
  }
  if (typeof props.location.state === "undefined") {
    haha = "no props";
  } else {
    haha = false;
    var { haha1 } = props.location.state;
  }
  return (
    <>
      {haha ? <p>page 1 {haha} </p> : <p>page 1 {haha1} </p>}

      <NavLink
        to={{
          pathname: "/page2",
          state: {
            haha: "true111"
          }
        }}
      >
        Goto page 2
      </NavLink>
    </>
  );
}

export default Content;
