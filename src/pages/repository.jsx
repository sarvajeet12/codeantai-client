import React from "react";
import Style from "../components/repo-comp/repo.module.css";
import RepoSideMenu from "../components/repo-comp/repo-side-menu";
import RepoMain from "../components/repo-comp/repo-main";

const Repository = () => {
  return <div className={Style.repository}>
    <RepoSideMenu />
    <RepoMain />
  </div>;
};

export default Repository;
