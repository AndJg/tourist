import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Destination = ({ src, title, price }) => {
    let containerStyle = {
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        width: 16.938 + 'rem',
        height: 26.563 + 'rem',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: ' space-between',
        marginTop: 5.125 + 'rem',
        marginBottom: 5.125 + 'rem',
        color: '#fff',
        padding: 1 + 'rem',
    };

    let buttonStyle = {
        width: 2.5 + 'rem',
        height: 2.5 + 'rem',
        border: 'none',
        borderRadius: 10 + 'rem',
        backgroundColor: '#92e6dc',
        color: '#fff',
    };

    let fontSize = {
        fontSize: 0.7 + 'rem',
    };
    return (
        <div style={containerStyle}>
            <div>
                <h3>{title}</h3>
                <p style={fontSize}>{price}</p>
            </div>

            <button style={buttonStyle}>
                <ArrowForwardIcon />
            </button>
        </div>
    );
};

export default Destination;
