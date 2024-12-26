import React from 'react'
import Style from "./repo.module.css";
import { images } from '../../assets/javascript/image-assets';


const RepoHeader = () => {
    return (
        <div className={Style.repoHeader}>
            <div>
                <span>
                    <h3>Repositories</h3>
                    <p>33 total repositories</p>
                </span>
                <span>
                    <button>
                        <img src={images.Refresh} alt="" />
                        <span>Refresh All</span>
                    </button>
                    <button>
                        <img src={images.Plus} alt="" />
                        <span>Add Repository</span>
                    </button>
                </span>

            </div>
            <div>
                <img src={images.Search} alt="search-icon" />
                <input type="search" placeholder='Search Repositories' />
            </div>
        </div>
    )
}

export default RepoHeader