import React from 'react';
import Img from 'gatsby-image';

export default function BandDetailCard(props) {
    return (
        <div className='band-detail-card-container'>
            <div className='band-detail-card-title'>props.name</div>
            <div className='band-detail-card-details'>
                <span className='band-detail-card-detail'>props.description</span>
                <Img fixed={props.photo1} alt={props.photo1AltText} />
                <Img fixed={props.photo2} alt={props.photo2AltText} />
            </div>
        </div>    
    );
}