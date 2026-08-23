import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  // useState hook
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharacterAllowed, setSpecialCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef hook
  const passwordRef = useRef(null)

  // useCallback hook
  const passwordGenerator = useCallback(() => {
    let pwd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "1234567890";
    }
    if (specialCharacterAllowed) {
      str += "[]{}()=+-_';:/?.>,<₹~!@#$%^&*"
    }

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pwd += str.charAt(index);
      
    } 
    setPassword(pwd);

  }, [length, numberAllowed, specialCharacterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password])

  // useEffect hook
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, specialCharacterAllowed, passwordGenerator])

  return (
    <>
      {/* <div className="flex flex-col items-center justify-center min-h-screen w-full"> */}
        <h1 className="bg-orange-100 text-4xl font-bold text-center shadow-md m-10">Password Generator</h1>

        <div className="bg-orange-100 rounded pt-7 pb-5 gap-2 min-w-md max-w-xl mx-auto rounded-xl flex flex-col shadow-xl">

          <div id="inputBox" className="flex justify-center overflow-hidden mb-4"> 

            <input type="text" readOnly  
            className="border-l border-y border-blue-500 focus:outline-none focus:ring focus:ring-blue-600 p-3 rounded-l-full h-10 w-90 bg-blue-50"
            value={password}
            ref={passwordRef}></input>

            <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-r-full shrink-0 active:bg-blue-900 active:px-7"
            onClick={copyPasswordToClipboard}>Copy</button>
          </div>

          <div className="flex gap-8 item-center justify-center">

            <div id="numbers" className="flex justify-center items-center gap-2">
              <input className="w-30 h-2 rounded-lg cursor-pointer accent-green-600 hover:accent-green-700" 
              type="range" min={8} max={100} 
              value={length}
              onChange={(e) => {
                {setLength(e.target.value)}
              }}
              ></input>
              <label className="text-sm font-small text-green-700">Length: {length}</label>
            </div>
            
            <div id="numbers" className="flex justify-center items-center gap-2">
              <input className="cursor-pointer w-5 h-5 accent-green-600" 
              type="checkbox" 
              id='allowedNumbers'
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed(prev => !prev);
              }}
              ></input>
              <label htmlFor='allowedNumbers' className="text-sm font-small text-green-700">Numbers</label>
            </div>

            <div id="specialCharacters" className="flex justify-center items-center gap-2">
              <input className="cursor-pointer w-5 h-5 accent-green-600" 
              type="checkbox" 
              id='allowedSpecialCharacters'
              defaultChecked={specialCharacterAllowed}
              onChange={() => {
                setSpecialCharacterAllowed((prev) => !prev)
              }}
              ></input>
              <label htmlFor='allowedSpecialCharacters' className="text-sm font-small text-green-700">Special Characters</label>
            </div>

          </div>

        </div>
      {/* </div>
       */}
    </>
  )
}

export default App
