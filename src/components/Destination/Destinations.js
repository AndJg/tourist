import React from 'react';

import Heading from '../Heading';
import Destination from './Destination';
import './Destination.scss';

import Thailand from '../../img/Destinations/Thailand.png';
import Italy from '../../img/Destinations/Italy.png';
import Indonesia from '../../img/Destinations/Indonesia.png';
import Singapore from '../../img/Destinations/Singapore.png';

const Destinations = () => {
    let destinationArray = [
        <Destination src={Thailand} title="Thailand" price="$900-$1900" />,
        <Destination src={Italy} title="Italy" price="$700-$2000" />,
        <Destination src={Indonesia} title="Indonesia" price="$300-$1200" />,
        <Destination src={Singapore} title="Singapore" price="$1300-$2700" />,
    ];
    return (
        <div className="container-destinations">
            <Heading small="Destination" bigger="Popular Tourism Countries" />
            <ul className="destinations">
                {destinationArray.map(e => (
                    <li className="destinations__item" key={e}>
                        {e}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Destinations;
