import React from 'react'

function Forcallbacks() {
  const callCallbacks = ()=> {
    return ()=> {
      console.log('here in callbacks');
    }
  }
  return (
    <div>{Forcallbacks()}</div>
  )
}

export default Forcallbacks
