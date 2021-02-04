import React from 'react';
// import './Business.sass';


const Business = (props) => {
    return (
      <div className="business">
        <div className="image-container">
          <img src={props.business.imageSrc} alt=''/>
        </div>
        <h2>{props.business.name}</h2>
        <div className="business-information">
          <div className="business-address">
            <p>{props.business.address}</p>
            <p>{props.business.city}</p>
            <p>{`${props.business.state} ${props.business.zipCode}`}</p>
          </div>
          <div className="business-reviews">
            <h3>{props.business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${props.business.rating} stars`}</h3>
            <p>{`${props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  
}

export default Business;
