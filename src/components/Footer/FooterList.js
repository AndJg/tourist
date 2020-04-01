import React from 'react';

const FooterList = ({ headline, link1, link2, link3, link4 }) => {
    let ulStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 0.5 + 'rem',
        marginRight: 1 + 'rem',
    };
    return (
        <div>
            <h3 style={ulStyle}>{headline}</h3>
            <ul style={ulStyle}>
                <li style={ulStyle}>{link1}</li>
                <li style={ulStyle}>{link2}</li>
                <li style={ulStyle}>{link3}</li>
                <li style={ulStyle}>{link4}</li>
            </ul>
        </div>
    );
};

export default FooterList;
