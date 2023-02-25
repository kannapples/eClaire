import React from 'react';
import Img from 'gatsby-image';

export default function BandBioCard(props) {
    return (
        <div className='band-bio-card-container'>
            <div className='band-bio-card-details' onClick={props.toggleShowBandDetail}>
                <div className='band-bio-card-name'>{props.name}</div>
                <Img fixed={props.photo1} alt={props.photo1AltText} className='band-bio-card' />
                <div className='band-bio-card-genre'>{props.genre}</div>
            </div>
            {/* <div className='band-bio-hover' /> */}
        </div>
    )
}