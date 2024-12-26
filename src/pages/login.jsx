import React from "react";

import LoginMain from "../components/login-comp/login-main";
import Style from "../components/login-comp/login.module.css";
import LoginSidebar from "../components/login-comp/login-sidebar";

const Login = () => {
  return (
    <div className={Style.login}>
      <LoginSidebar />
      <LoginMain />
    </div>
  );
};

export default Login;
