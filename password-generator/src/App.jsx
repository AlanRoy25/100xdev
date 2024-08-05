import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numbersallowed, setNumbersallowed] = useState(false);
  const [characterallowed, setCharacterallowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numbersallowed) str += "0123456789";
      if (characterallowed) str += "~!@#$%^&*()";


      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length)
        pass += str.charAt(char)
      }

      setPassword(pass)
    }, [length, numbersallowed, characterallowed,setPassword]);
    

    const copyPassword =  useCallback(() => {
      passwordRef.current?.select();
      window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => { //whenever the page gets load it will generate a new one and if anything is checked then it will show the change
      passwordGenerator()
    }, [length, numbersallowed, characterallowed, passwordGenerator])
      
    
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-8'>
          <input type="text" value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly />
          <button onClick={copyPassword} className='outline-none bg-blue-500 text-white px-4 py-1 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label> Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numbersallowed}
              id='numberInput'
              onChange={() => {
                setNumbersallowed((prev) => !prev)
              }}
            />
            <label htmlFor="Numbers">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={characterallowed}
              id='characterinput'
              onChange={() => {
                setCharacterallowed((prev) => !prev)
              }}
            />
            <label htmlFor="Characters">Characters</label>
          </div>
        </div>
      </div>
    </>
  )

}

export default App
