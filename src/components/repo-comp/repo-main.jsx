import React from 'react'
import RepoHeader from './repo-header'
import Repositories from './repositories'
import Style from "./repo.module.css";


const RepoMain = () => {
    return (
        <div className={Style.repoMain}>
            <div className={Style.repoMainContainer}>
                <RepoHeader />
                <Repositories />
            </div>
        </div>
    )
}

export default RepoMain