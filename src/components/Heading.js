import React from 'react';

import Shape from '../img/Shape.png';

const Heading = ({ small, bigger }) => {
    let imgStyle = {
        height: 'auto',
        marginTop: 1 + 'rem',
    };

    let smallStyle = {
        color: '#8D8D8D',
        textTransform: 'uppercase',
        marginBottom: 0.5 + 'rem',
    };

    let headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    return (
        <div style={headerStyle}>
            <h4 style={smallStyle}>{small}</h4>
            <h2>{bigger}</h2>
            <img src={Shape} alt="Shape-item" style={imgStyle} />
        </div>
    );
};

export default Heading;
