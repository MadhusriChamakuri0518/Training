import React, { useState } from "react";

const Counter = () => {
    // count is a variable and second argument setCount is a funtion for the updated value.
    const [count, setCount] = useState();
    console.log(count);
    return(
        <button onClick={setCount(count+1)}>Count {count}</button>
    //  <button onClick={()=>count(count+1)}>Count {count}</button>
    )
     

}

export default Counter