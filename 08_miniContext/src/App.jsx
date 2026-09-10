import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    < UserContextProvider >
    <div className="py-4 px-2 flex-1 justify-center text-center">
      <h1 className="bg-emerald-700 text-3xl p-2 text-center shadow-gray-700 shadow-lg text-white">Mini Context</h1>
      <Login />
      <Profile />
    </div>
    
    </ UserContextProvider >
  )
}

export default App
