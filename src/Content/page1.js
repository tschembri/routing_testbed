import { GetBlah } from "./blah";
import React from "react";
import { NavLink } from "react-router-dom";

function GetBlah2() {
  return "yah";
}

function Content(props) {
  let foo = GetBlah();
  let haha = "x";

  if (typeof props.location.state === "undefined") {
    haha = "no props";
  } else {
    haha = false;
    var { haha1 } = props.location.state;
  }
  return (
    <>
      {haha ? (
        <p>
          page 1 {haha} {foo}{" "}
        </p>
      ) : (
        <p>
          page 1 {haha1} {foo}{" "}
        </p>
      )}

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
