import React, {useState} from "react";

const Decrement = () => {
    const [ dec, setDec ] = useState (0)
    return(
        <div>
            <h3>Decrement Funtion</h3>
            <button onClick={()=>setDec(dec-1)}>Count: {dec}</button>
        </div>
    )
}

export default Decrement