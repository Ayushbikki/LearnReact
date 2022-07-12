import React from 'react'

function ChildComponent(props) {
  return (
    <div className='child'>
      <h1>Child</h1>
      <button onClick={()=>props.changeWord('from child')}>Click me</button>
    </div>
  )
}

export default ChildComponent