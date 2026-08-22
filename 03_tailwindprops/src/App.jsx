import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card username="chai aur code" btnText="Click me"/>
      <Card username="Prakhar Tripathi" />
    </div>
    </>
  )
}

export default App
