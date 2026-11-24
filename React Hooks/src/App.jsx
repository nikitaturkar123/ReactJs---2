import React from 'react'

const App = () => {
  const [num, setNum] = useState(60);
  const [username, setUsername] = useState('Nikita');
  const [users, setUsers] = useState([10,20,30]);
  function changeNum(){
    setNum(30);
    setUsername('Princy');
  }

  return(
    <div>
      <h1>Value of num is {num} <br /> {users} <br />Value of user is {username}</h1>
      <button onClick={changeNum}>Click</button>
      <h1>Hello EveryOne</h1>
    </div>
  )
}

export default App

