import React, { useState } from 'react'
import { images } from "../../assets/javascript/image-assets";
import { tabs } from '../../data/login-data';
import Style from "./login.module.css";


const LoginListHeader = ({ category, setCategory }) => {

    const [toggle, setToggle] = useState(false);

    const [activeTab, setActiveTab] = useState("SAAS");


    const someFunction = (value) => {
        setCategory(value);

        if (value !== activeTab) {
            setToggle(!toggle);
            setActiveTab(value);
        }
    }

    return (
        <div className={Style.loginListHeader}>
            <p>
                <img src={images.LogoPic2} alt="Logo" />
                <span>CodeAnt AI</span>
            </p>
            <h1>Welcome to CodeAnt AI</h1>
            <div className={Style.loginListHeaderBtnContainer}>
                <div className={toggle ? Style.active : Style.inActive}></div>
                {
                    tabs.map((tab, index) => {
                        return (
                            <button key={index} onClick={() =>
                                someFunction(tab)}
                                className={activeTab === tab ? Style.activeTab : Style.inActiveTab}
                            >
                                {tab}
                            </button>
                        )
                    })
                }
            </div>

        </div >
    )
}

export default LoginListHeader