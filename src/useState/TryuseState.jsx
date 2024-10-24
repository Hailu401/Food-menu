
import React, { useState } from 'react'

function TryState() {
 
  const [Car, setCar] = useState({
    brand: "New",
    model: "suzuki",
    year: "2020"
});
  
const CarStatus =()=>{
  setCar((prev)=>{
    return { ...prev, brand: "Old", model: "Toyota", year: "2015" };
  });
}
  return (
    <div>
      <h1> My is {Car.brand} model {Car.model} year {Car.year}</h1>
      <button onClick={CarStatus} >Car Status</button>
      <button>minus</button>
    </div>
  )
}

export default TryState;
