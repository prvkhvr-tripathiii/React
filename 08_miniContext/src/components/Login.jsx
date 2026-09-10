import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

  return (
    <div className="flex-1 justify-center bg-amber-50 rounded-xl mx-60 mt-30 shadow-2xl">
      <h2 className="text-xl text-emerald-700 p-3 mb ">Login</h2>
      <div className="flex justify-center text-center"> 
        <input type='text' 
            className="border border-emerald-700 rounded py-1 px-2 m-2 focus:outline-0 focus:border focus:border-amber-600 "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'/>
        <input type='text' 
            className="border border-emerald-700 rounded py-1 px-2 m-2 focus:outline-0 focus:border focus:border-amber-600 "
            value={password}
            onChange={(e) => setPassword(e.target.value)}placeholder='password'/>
      </div>
      <button className="bg-amber-200 rounded-full px-6 py-1 m-4 text-emerald-800 border border-amber-300 drop-shadow-sm hover:bg-amber-300 hover:border-amber-400 hover:shadow-md" 
        onClick={handleSubmit}
      >Submit</button>
    </div>
  )
}

export default Login
