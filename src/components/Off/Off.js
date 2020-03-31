import React from 'react';

import './Off.scss';

const Off = () => {
    return (
        <div className="container-off">
            <div className="container-off__items">
                <h3>Get 10% Off Your Next Travel</h3>
                <p>Maximum doscout 1000$ per person</p>
                <div className="container-subscribe">
                    {' '}
                    <input type="email" placeholder="Enter Your Email" />
                    <button className="btn-subscribe">Subscribe</button>
                </div>
            </div>
            <div className="container-off__overlay"></div>
        </div>
    );
};

export default Off;
