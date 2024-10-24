import React, { useState } from 'react'

function OtherUseState() {
    const [Number, setNumber] = useState(0)

    const CubeNum = (num) =>{
        
        return Math.pow(num,3)
         
    }
    

const result = CubeNum(Number);

  return (
    <div>
    
      <h1>the cube of this number is {result}</h1>
      <input type="number" value={Number} onChange={(e)=>{setNumber(e.target.value)}} />
    </div>
  );
}

export default OtherUseState;
