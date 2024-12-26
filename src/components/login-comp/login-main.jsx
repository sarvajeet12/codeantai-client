import React, { useState } from "react";
import Style from "./login.module.css";
import LoginListHeader from "./login-list-header";
import LoginList from "./login-list";
import { Link } from "react-router-dom"

const LoginMain = () => {

  const [category, setCategory] = useState("SAAS")

  return <div className={Style.loginMain}>
    <div className={Style.loginMainContainer}>
      {/* top */}
      <LoginListHeader category={category} setCategory={setCategory} />
      {/* hr */}
      <hr className={Style.hrLoginMain} />

      {/* middle */}
      <LoginList category={category} />
    </div>

    {/* bottom */}
    <p className={Style.privacyPolicy}><span>By signing up you agree to the</span> <Link>Privacy Policy.</Link> </p>
  </div>;
};

export default LoginMain;
