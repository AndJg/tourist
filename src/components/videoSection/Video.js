import React, { Fragment } from 'react';

import './Video.scss';
import Achivment from './Achivment';
import Star from '../../img/offer/Star.png';
import Attractions from '../../img/offer/attractions.png';
import Earth from '../../img/offer/earth.png';
import Capa from '../../img/offer/capa.png';
import Heading from '../Heading';
const Video = () => {
    return (
        <Fragment>
            <div className="container-video">
                <div class="container-video__overlay"></div>
                <div class="container-video__content">
                    <Heading small="Discover" bigger="Watch Our Video Tour" />
                </div>
                <div className="container-video__videoitem">
                    <iframe src="" frameborder="0" width="663" height="314"></iframe>
                </div>
            </div>
            <div className="achivments">
                <div className="achivments__icon">
                    <Achivment src={Star} />
                    <h4>120,895</h4>
                    <p>happy travelers</p>
                </div>
                <div className="achivments__icon">
                    {' '}
                    <Achivment src={Attractions} />
                    <h4>2594</h4>
                    <p>satisfied tours</p>
                </div>
                <div className="achivments__icon">
                    {' '}
                    <Achivment src={Earth} />
                    <h4>854</h4>
                    <p>destination</p>
                </div>
                <div className="achivments__icon">
                    {' '}
                    <Achivment src={Capa} />
                    <h4>978</h4>
                    <p>hotel resorts</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Video;
