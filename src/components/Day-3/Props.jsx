import React from 'react'

// This is by destructuring 

// const Props = ({authName}) => {
//   return (
//     <div>
//       <h1>This is example for props... Author name is {authName}</h1>
//     </div>
//   )
// }

const Props = (props) => {
    return (
      <div>
        <h1>This is example for props... Author name is {props.authName}</h1>
      </div>
    )
  }

export default Props
