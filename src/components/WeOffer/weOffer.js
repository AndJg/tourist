import React from 'react';

import OfferSlider from './OfferSlider';
import './weOffer.scss';

import Heading from '../Heading';

const weOffer = () => {
    return (
        <div className="offer-container">
            <Heading small="we offer" bigger="Popular Tour Package" />
            <OfferSlider />
        </div>
    );
};

export default weOffer;
