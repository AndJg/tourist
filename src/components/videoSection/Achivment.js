import React from 'react';

const Achivment = ({ src }) => {
    let iconStyle = {
        marginBottom: 10 + 'px',
        height: 50 + 'px',
    };
    return (
        <div>
            {' '}
            <img src={src} alt="icon" style={iconStyle}></img>
        </div>
    );
};

export default Achivment;
