import React from "react";
import Style from "./login.module.css";
import { loginSidebarData } from "../../data/login-data";
import { images } from "../../assets/javascript/image-assets";
import { IoMdArrowRoundUp } from "react-icons/io";

const LoginSidebar = () => {
  return (
    <div className={Style.loginSidebar}>
      {/* parent */}
      <div className={Style.loginSidebarParent}>
        {/* autofix part */}
        <div className={Style.loginSidebarAutoFix}>
          <div>
            <img src={images.LogoPic2} alt="" />
            <h2>AI to detect & autofix bad code</h2>
          </div>
          <hr className={Style.hrLine} />
          <ul>
            {loginSidebarData.map((item, index) => {
              return (
                <li key={index}>
                  <h1>{item.number}</h1>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* issues fixed */}
        <div className={Style.loginSidebarIssuesFixed}>
          {/* image */}
          <div>
            <img src={images.Ellipse} alt="ellipse" />
            <img src={images.Vector} alt="vector" />
          </div>

          {/* this week */}
          <div>
            <h3>
              <span>
                <IoMdArrowRoundUp />{" "}
              </span>
              <span>14%</span>
            </h3>
            <p>This week</p>
          </div>

          {/* issue fixed */}
          <div>
            <h2>Issues Fixed</h2>
            <h1>500k+</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSidebar;
