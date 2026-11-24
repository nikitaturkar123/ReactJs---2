import React from 'react'

const App1 = () => {
  return (
    <div>
      <div onMouseMove={()=>{
        console.log('nachiooooooo');
      }} className='box'></div>
    </div>
  )
}

export default App1
