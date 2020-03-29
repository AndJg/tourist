import React, { Fragment } from 'react';

import './Offer.scss';

const Offer = ({ src, price, name, days, type }) => {
    return (
        <Fragment>
            <div className="offer-container">
                <div className="offer">
                    <img src={src} alt="offer-image" className="image-offer" />
                    <div className="type">{type}</div>
                    <div className="offer__content">
                        <p>{price}</p> <h3 style={{ color: '#00f' }}>{name}</h3>
                        <p>{days}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Offer;
