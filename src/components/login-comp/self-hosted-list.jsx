import React from 'react';
import { selfHostedList } from '../../data/login-data';

const SelfHostedList = () => {
    return (
        <>{
            selfHostedList.map((item, index) => {

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

export default SelfHostedList