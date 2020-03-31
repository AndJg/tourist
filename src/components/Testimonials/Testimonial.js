import React from 'react';

import backquote from '../../img/backquote.png';
import './Testimonial.scss';

const Testimonial = ({ src, name, text }) => {
    let imgStyle = {
        width: 5.313 + 'rem',
        marginTop: 3.375 + 'rem',
        marginBottom: 1.094 + 'rem',
    };
    let nameStyle = { marginBottom: 2.35 + 'rem', color: '#00f' };
    let textStyle = {
        textAlign: 'center',
        marginLeft: 2.25 + 'rem',
        marginRight: 2.25 + 'rem',
    };
    let backquoteStyle = {
        marginTop: 2.25 + 'rem',
    };
    return (
        <div className="container-testimonial">
            <img src={src} alt="testimonial-image" style={imgStyle} />
            <h3 style={nameStyle}>{name}</h3>
            <p style={textStyle}>{text}</p>
            <img src={backquote} alt="backquote" style={backquoteStyle} />
        </div>
    );
};

export default Testimonial;
