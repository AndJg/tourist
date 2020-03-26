import React, { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Images from './Images';
import BG from '../../img/BG.png';
import './Slider.scss';

const Slider = () => {
    let sliderArray = [<Images src={BG} />, 2, 3, 4];
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className="slider">
            {sliderArray.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                        {item}
                    </div>
                );
            })}
            <button id="goLeft" className="btnLeft" onClick={goLeft}>
                <ArrowBackIcon />
            </button>
            <button id="goRight" className="btnRight" onClick={goRight}>
                <ArrowForwardIcon />
            </button>
        </div>
    );
};

export default Slider;
