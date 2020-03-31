import React from 'react';

import './Testimonial.scss';

const Testimonial = ({ src, name, text }) => {
    let imgStyle = {
        width: 5.313 + 'rem',
        marginTop: 3.375 + 'rem',
        marginBottom: 1.094 + 'rem',
    };
    let nameStyle = { marginBottom: 2.35 + 'rem' };
    let textStyle = {
        textAlign: 'center',
        marginLeft: 2.25 + 'rem',
        marginRight: 2.25 + 'rem',
    };
    let backquoteStyle = {};
    return (
        <div className="container-testimonial">
            <img src={src} alt="testimonial-image" style={imgStyle} />
            <h3 style={nameStyle}>{name}</h3>
            <p style={textStyle}>{text}</p>
            <div className="backquote">"</div>
        </div>
    );
};

export default Testimonial;
