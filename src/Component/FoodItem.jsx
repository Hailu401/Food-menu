import React, { Component } from 'react'

export default class FoodItem extends Component {
  
  render() {
    const {img, title, price, desc} = this.props.obj
    return (
      <div>
        
        
        <div className="single-food">
          <div className="img">
            <img
              src={img}
            />
           </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p> ${price} </p>
          </div>
          <div className="food-desc">
          {desc.substring(0,250)}...more
          </div>

       
        
       </div> 
     </div>
    )
  }
}
