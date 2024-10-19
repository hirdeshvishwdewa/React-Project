import {useState} from 'react';
import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-3 shadow-lg rounded-md'>
            <button onClick={() => setColor("red")} className='outline-none bg-red-600 px-4 rounded-md text-white shadow-lg'>Red</button>
            <button onClick={() => setColor("green")} className='outline-none bg-green-600 px-4 rounded-md text-white shadow-lg'>Green</button>
            <button onClick={() => setColor("blue")} className='outline-none bg-blue-600 px-4 rounded-md text-white shadow-lg'>Blue</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
