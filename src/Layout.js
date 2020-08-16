import React from "react";
import Appbar from "./Appbar";

const Layout = ({ children }) => (
  <div>
    {" "}
    <Appbar />
    {children}
  </div>
);

export default Layout;
