import React, { useState } from 'react'
import Style from "./repo.module.css";
import { images } from '../../assets/javascript/image-assets';
import { FaChevronDown } from "react-icons/fa6";
import { repoMenuListTop } from '../../data/repo-data';
import { repoMenuListBottom } from '../../data/repo-data';

const RepoSideMenu = () => {


    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => {
        setToggle(!toggle);
    };

    return (
        <div className={Style.repoSideBar}>
            {/* ------------------------- logo and heading ------------------------------------------ */}
            <div>
                <img src={images.LogoPic2} alt="logo" />
                <p>CodeAnt AI</p>
            </div>
            {/* ------------------------------------------- menu --------------------------------- */}
            <div className={`${Style.repoSideBarMenu} ${toggle ? Style.showMenu : ""}`} >

                <div className={Style.repoSideBarTop} >
                    <div>
                        <span>UtkarshDhairyaPanwar</span>
                        <span><FaChevronDown /> </span>
                    </div>

                    {/* menu list */}
                    <ul>
                        {
                            repoMenuListTop.map((item, index) => {
                                return (
                                    <li key={index} className={index === 0 ? Style.activeMenu : null}>
                                        <img src={item.icon} alt={item.name} />
                                        <span>{item.name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ul className={Style.repoSideBarBottom}>
                    {
                        repoMenuListBottom.map((item, index) => {
                            return (
                                <li key={index} ><img src={item.icon} alt={item.name} /><span>{item.name}</span></li>
                            )
                        })
                    }
                </ul>
            </div>



            {/* ----------------------------------------------- menu ---------------------------------------- */}
            <div className={Style.menuBar}>
                {
                    !toggle ? <img src={images.Bars} alt="menu" onClick={() => toggleMenu()} />:
                    <img src={images.Close} alt="menu" onClick={() => toggleMenu()} />
                }
            </div>

        </div>
    )
}

export default RepoSideMenu