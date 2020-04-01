import React from 'react';

const Achivment = ({ src, count, title }) => {
    let iconStyle = {
        marginBottom: 10 + 'px',
        height: 50 + 'px',
    };
    return (
        <div>
            {' '}
            <img src={src} alt="icon" style={iconStyle}></img>
            <h4>{count}</h4>
            <p>{title}</p>
        </div>
    );
};

export default Achivment;
