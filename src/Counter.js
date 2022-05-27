import React from 'react'

const Counter = (props) => {
  return (    
    <>
        <div>
            Number of characters { props.totalchars }
        </div>

        <div>
            Number of words {  props.totalwords }
        </div>  
    </>    
  )
}

export default Counter
