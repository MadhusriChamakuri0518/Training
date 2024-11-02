import React from "react";
import Increment from "../atoms/Increment";
import Decrement from "../atoms/Decrement";

const CounterIncDec = () => {
    return(
        <div>
            <Increment/>
            <Decrement/>
        </div>
    )
}

export default CounterIncDec