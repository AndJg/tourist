import React from 'react';

import Offer from './Offer';
import offer1 from '../../img/weOffer/offer1.png';
import offer2 from '../../img/weOffer/offer2.png';
import offer3 from '../../img/weOffer/offer3.png';

const OfferSlider = () => {
    let sliderArray = [
        <Offer src={offer3} price="$111/person" name="World Tour Of Paris" days="7 days/ 8 nights" type="Holiday" />,
        <Offer src={offer2} price="$179/person" name="Nature Of Pukhet" days="3 days/ 4 nights" type="Holiday" />,
        <Offer
            src={offer1}
            price="$299/person"
            name="Blue Beauty Of Greece"
            days="5 days/ 6 nights"
            type="Honeymoon"
        />,
    ];

    return (
        <ul className="slide-list">
            {sliderArray.map(e => (
                <li className="offer-slide" key={e}>
                    {e}
                </li>
            ))}
        </ul>
    );
};

export default OfferSlider;
