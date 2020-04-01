import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import FooterList from './FooterList';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="container-footer">
            <div className="container-footer__left">
                <FooterList
                    headline="Quick Links"
                    link1="Home"
                    link2="About Company"
                    link3="Testimonials"
                    link4="Infrastructure"
                />
                <FooterList headline="Support" link1="Get Started" link2="Lorem" link3="Help" link4="Ipsum" />
                <FooterList
                    headline="Address"
                    link1="14, 1 Ellis bridge ST,"
                    link2="Auckland 3500, Australia"
                    link3="+1234567890"
                    link4="contactus@demo.com"
                />
            </div>
            <div className="container-footer__right">
                <p>Subscribe to our newsletter</p>
                <div className="email">
                    {' '}
                    <input type="email" placeholder="Your Email" />
                    <button className="container-footer__btn">
                        <ArrowForwardIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
