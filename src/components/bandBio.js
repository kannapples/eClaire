import React from 'react';
import Img from 'gatsby-image';

export default function BandBio(props) {
    return (
        <div className='band-bio'>
            <span className='band-name'>{props.name}</span>
            <div className='band-description'>{props.description}</div>
            <Img fixed={props.photo1} alt={props.photo1AltText} className='band-photo-1' />
            <Img fixed={props.photo2} alt={props.photo2AltText} className='band-photo-2' />
        </div>
    )
}