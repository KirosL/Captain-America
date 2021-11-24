import React, {useState} from 'react';
//import Editar from '../Page/Editar';
import PropTypes from 'prop-types'
import './Card.css'

function Card({title,imageSource, description,url}){

    return (
        <div className="card text-center bg-dark d-flex justify-content-center text-center">
            <div className="overflow">
            <img src={imageSource} alt="" className="card-img-top" />
            
            </div>
            <div className="card-body">
                <h4 className="card-title text-white"> {title} </h4>
                <p className="card-text text-secondary">
                    {description}
                </p>
                <a href="#" >
                {url}
                </a>
            </div>
        </div>
    )
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string
}
export default Card;
