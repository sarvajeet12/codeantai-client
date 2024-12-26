import React from 'react'
import { saasList } from '../../data/login-data'

const SaasList = () => {
    return (
        <>{
            saasList.map((item, index) => {

                return (
                    <div key={index}>
                        <img src={item.icon} />
                        <h2>{item.name}</h2>
                    </div>
                )
            })}
        </>
    )
}

export default SaasList