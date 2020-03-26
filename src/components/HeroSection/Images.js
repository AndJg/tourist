import React, { Fragment } from 'react';
import './Slider.scss';

const Images = ({ src }) => {
    let imgStyle = {
        width: 100 + '%',
        height: 'auto',
    };
    return (
        <Fragment>
            <img src={src} alt="slide-image" style={imgStyle}></img>
            <div className="centerContainer">
                <div className="centerText">
                    {' '}
                    <h1>Discover Greece</h1>
                    <p>Travel with unique experince</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Images;
