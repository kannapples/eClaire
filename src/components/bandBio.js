import React from 'react';
import Img from 'gatsby-image';

export default function BandBio(props) {
    return (
        <div>
            <span className='bandName'>{props.bandName}</span>
            <div className='bandDescription'>{props.bandDescription}</div>
            <Img fluid={props.bandPhoto1} alt={props.bandPhoto1AltText} />
            <Img fluid={props.bandPhoto2} alt={props.bandPhoto2AltText} />
        </div>
    )
}