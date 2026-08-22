import { useState } from 'react'
import Button from './components/Button.jsx'
import './App.css'

function App() {
  const [color, setColor] = useState("Black")

  return (
    <>
      <div className="bg-amber-200 h-screen w-full flex flex-wrap justify-center items-center" style={{backgroundColor: color}}> 
        <h1 className="fixed text-2xl top-12" style={{color: color === "Black"? "White": "Black"}}>Background Color Changer</h1>
        {/* <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0"> */}
          
          <div className="fixed flex flex-wrap py-2 px-4 bottom-12 rounded-3xl gap-4 shadow-lg bg-white">

            <Button color="Cyan" setColor={setColor} />
            <Button color="Olive" setColor={setColor} />
            <Button color="Pink" setColor={setColor} />
            <Button color="Orange" setColor={setColor} />
            <Button color="Green" setColor={setColor} />
            <Button color="Yellow" setColor={setColor} />
            <Button color="Lavender" setColor={setColor} />
            <Button color="Orange" setColor={setColor} />
            <Button color="Teal" setColor={setColor} />
            <Button color="White" setColor={setColor} />
            <Button color="Black" setColor={setColor} />

            {/* <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Cyan"}} onClick={() => setColor("Cyan")}>Cyan</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Olive", color:"White"}} onClick={() => setColor("Olive")}>Olive</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Pink"}} onClick={() => setColor("Pink")}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Fuchsia", color:"White"}} onClick={() => setColor("Fuchsia")}>Fuchsia</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Orange", color:"White"}} onClick={() => setColor("Orange")}>Orange</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Blue", color:"White"}} onClick={() => setColor("Blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Green", color:"White"}} onClick={() => setColor("Green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Teal", color:"White"}} onClick={() => setColor("Teal")}>Teal</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Salmon", color:"White"}} onClick={() => setColor("Salmon")}>Salmon</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Bisque"}} onClick={() => setColor("Bisque")}>Bisque</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Indigo", color:"White"}} onClick={() => setColor("Indigo")}>Indigo</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Lavender"}} onClick={() => setColor("Lavender")}>Lavender</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"Black", color:"White"}} onClick={() => setColor("Black")}>Black</button>
            <button className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"White"}} onClick={() => setColor("White")}>White</button> */}
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default App
