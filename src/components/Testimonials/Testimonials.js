import React from 'react';

import './Testimonial.scss';
import Heading from '../Heading';
import Testimonial from './Testimonial';

import test1 from '../../img/testi1.png';

const Testimonials = () => {
    let testimonialsArray = [
        <Testimonial
            src={test1}
            name="Ribeca Singh"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum has been the industry's standard"
        />,
        2,
        3,
    ];
    return (
        <div className="container-testimonials">
            <Heading small="Our Smiles" bigger="Happy Travelers" />
            <ul className="testimonials">
                {testimonialsArray.map(e => (
                    <li className="testimonials__item" key={e}>
                        {e}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Testimonials;
