import React from 'react'
import Style from "./login.module.css";
import SaasList from './saas-list';
import SelfHostedList from './self-hosted-list';

const LoginList = ({ category }) => {
    return (
        <div className={Style.loginListContainer}>
            {
                category === "SAAS" ? <SaasList /> : <SelfHostedList />
            }

        </div>
    )
}

export default LoginList