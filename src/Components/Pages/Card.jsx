import React from 'react';
import Image from '../../assets/Card-Img.png'
import Star from '../../assets/Star.svg'


const Card = (props) => {

    return (
    <div className='product'>
        <div className="card">
            <img className='card-img' src={ props.img } alt="Card-Image-1" />
            <div className="card-stats">
                <img className='card-star' src={ Star } alt="" />
                <span>5.0</span>
                <span className='gray'> (6)</span>
                <span className='gray'>USA</span>
            </div>
            <p>Life Lessons from Katie Clement</p>
            <p> <span className='bold'> From $136 </span> per person</p>
        </div>
    </div>
)
}

export default Card 