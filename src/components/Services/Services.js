import React, { Fragment } from 'react';

import './Services.scss';
import first from '../../img/services/1.png';
import second from '../../img/services/2.png';
import third from '../../img/services/3.png';
import fourth from '../../img/services/4.png';
import fifth from '../../img/services/5.png';
import sixth from '../../img/services/6.png';

import Shape from '../../img/Shape.png';

const Services = () => {
    return (
        <Fragment>
            <div className="services">
                <div className="container">
                    <div className="leftColumn">
                        <h4>Discover</h4>
                        <h2>Our Hot Services</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard
                        </p>
                    </div>
                    <div className="rightColumn">
                        <div className="rightColumn__box">
                            <img src={first} alt="Logo" />
                            <h3>Flight booking</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.</p>
                        </div>
                        <div className="rightColumn__box">
                            {' '}
                            <img src={second} alt="" />
                            <h3>HOTEL & RESORT BOOKING</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.</p>
                        </div>
                        <div className="rightColumn__box">
                            {' '}
                            <img src={third} alt="" />
                            <h3>FAMILY TRIP PLANNER</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.</p>
                        </div>
                        <div className="rightColumn__box">
                            {' '}
                            <img src={fourth} alt="" />
                            <h3>CRUISE TOUR</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.</p>
                        </div>
                        <div className="rightColumn__box">
                            {' '}
                            <img src={fifth} alt="" />
                            <h3>FIRE CAMP</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.</p>
                        </div>
                        <div className="rightColumn__box">
                            {' '}
                            <img src={sixth} alt="" />
                            <h3>CORPORATE HOLIDAYS</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Services;
