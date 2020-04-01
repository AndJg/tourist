import React, { Fragment } from 'react';
import CountUp from 'react-countup';

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
                <div className="container-video__overlay"></div>
                <div className="container-video__content">
                    <Heading small="Discover" bigger="Watch Our Video Tour" />
                </div>
                <div className="container-video__videoitem">
                    <iframe
                        src="https://www.youtube.com/watch?v=GTRQsa3jpXU"
                        frameBorder="0"
                        className="video-frame"
                    ></iframe>
                </div>
            </div>
            <div className="achivments">
                <div className="achivments__icon">
                    <Achivment
                        src={Star}
                        count={<CountUp start={100} end={120859} duration={5} delay={5} />}
                        title="Happy Travelers"
                    />
                </div>
                <div className="achivments__icon">
                    {' '}
                    <Achivment
                        src={Attractions}
                        count={<CountUp start={10} end={845} duration={5} delay={10} />}
                        title="Satisfied Tourist"
                    />
                </div>
                <div className="achivments__icon">
                    {' '}
                    <Achivment
                        src={Earth}
                        count={<CountUp start={10} end={854} duration={5} delay={15} />}
                        title="Destinations"
                    />
                </div>
                <div className="achivments__icon">
                    {' '}
                    <Achivment
                        src={Capa}
                        count={<CountUp start={10} end={978} duration={5} delay={20} />}
                        title="Hotel Resorts"
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Video;
