import React from 'react';
import Img from 'gatsby-image';

export default function BandBioCard(props) {
    return (
        <div className='band-bio-card-container' onClick={props.onClick}>
            <Img fixed={props.photo1} alt={props.photo1AltText} className='band-bio-card' />
            <div className='band-bio-card-info'>
                <div className='band-bio-card-name'>{props.name}</div>
                <div className='band-bio-card-genre'>{props.genre}</div>
            </div>
        </div>
    )
}