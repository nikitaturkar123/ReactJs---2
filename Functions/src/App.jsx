import React from 'react'


const App = () => {

//   const btnClicked = () => {
//   }

//   function btnClicked(){
//     console.log('Button is Clicked');
//   }

//   function buttonClicked(){
//     console.log('How are you?');
//   }

//   function mouseEnter(){
//     console.log('Mouse Entered');
//   }

//   function inputChanging(val){
//     console.log(val);
//   }  


  return (
    <div>
        <div onMouseMove={()=>{
        console.log('nachiooooooo');
        }} className='box'></div>
       {/* <h1>Hello Everyone....</h1>
       <button onMouseEnter={mouseEnter} onClick={btnClicked}>Change User</button>
       <button onDoubleClick={buttonClicked}>Me</button>
       <button onClick={btnClicked}>Explore this</button>

       <button onClick = {function(){
          console.log('hello');
        }}>Click Here</button>

        <button onClick={() => {
         console.log('Button Clicked');
        }}>Click Here</button>

       <input onChange={()=>{
         console.log('Input pr Click');
        }} type="text" placeholder='Enter Name' />

       <input onChange={inputChanging} type="text" placeholder='Enter Name' />

       <input onChange={function(elem){
        console.log(elem);
        console.log(elem.target);
        console.log(elem.target.value);
       }}
       type="text"
       placeholder='Enter Name'
       /> 

       <input onChange={function(elem){
        inputChanging(elem.target.value)
       }}
       type="text"
       placeholder='Enter Name'
       />  */}

    </div>
  )
}


export default App
