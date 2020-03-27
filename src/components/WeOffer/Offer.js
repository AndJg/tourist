import React, { Fragment } from 'react';

const Offer = ({ src, name, days }) => {
    return (
        <Fragment>
            <div className="offer">
                <img src={src} alt="offer-image" className="image-offer" />
                <div className="offer__content">
                    <p>{price}</p> <h3>{name}</h3>
                    <p>{days}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Offer;
