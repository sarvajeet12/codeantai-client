import React from 'react'
import Style from "./repo.module.css";
import { repoList } from '../../data/repo-data';
import { images } from '../../assets/javascript/image-assets';

const Repositories = () => {

    const length = repoList.length - 1;

    return (
        <ul className={Style.repositories}>
            {
                repoList.map((item, index) => {
                    return (
                        <li key={index} className={`${index === length ? Style.lastBox : ""} ${index === 1 ? Style.activeRepo : ""}`}>
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.access}</p>
                            </div>
                            <div>
                                <p>  {item.domain} <img src={images.Circle} /></p>
                                <p> <img src={images.Database} /> {item.size}</p>
                                <p>{item.status}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Repositories