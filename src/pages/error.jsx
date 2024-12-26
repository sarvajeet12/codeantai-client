import React from "react";
import Style from "../components/error-comp/error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={Style.errorPage}>
      <h2>Error 404</h2>
      <h1>Page Not Found</h1>
      <Link to={"/"}><button>Login</button></Link>
    </div >
  )
};

export default Error;
