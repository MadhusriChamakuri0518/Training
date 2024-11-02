import React, {useState} from "react";

const Increment = () => {
    const [ Inc,setInc ] = useState(0)
    return(
        <div>
        <h3>Increment Funtion</h3>
        <button onClick={()=>setInc(Inc+1)}>count : {Inc}</button>
        </div>
    )
}

export default Increment