import React from 'react';

import OfferSlider from './offerSlider';
import './weOffer.scss';

const weOffer = () => {
    return (
        <div className="offer-container">
            <h3>We Offer</h3>
            <h2>Popular Tour Package</h2>
            <OfferSlider />
        </div>
    );
};

export default weOffer;
