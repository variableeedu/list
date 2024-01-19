import { useState } from 'react'
import { Firstlist } from './list';
import { Back } from './assets/shift';


function App() {
  const [input, setInput] = useState<string>("")
  const [list, setList] = useState<string[]>([])
  const [add, setAdd] = useState<string[]>([])
  const [index, setIndex] = useState<boolean>(false)

  return (
    <div className=' h-screen w-full pt-10 flex justify-center  '>
      <div className='space-y-8'>
        <div className='flex space-x-4 justify-center'>

          <input value={input} onChange={(e) => {
            let b = e.target.value
            setInput(b)

          }}
            className='h-10 w-[330px] bg-gray-300'></input>
          <button onClick={() => {
            let l = input.trim().length
            if (l === 0) return;
            let a = ([...list, input])
            setList(a)
            setInput(" ")

          }}
            className='h-10 w-[80px] bg-red-300 rounded-lg text-center pt-1'>Add </button>
        </div>
        <div className='flex  justify-evenly'>

          <button onClick={() => {
            setIndex(true)
          }} className='h-10 w-24 bg-green-400 rounded-lg'>next</button>
          <button onClick={() => {
            setIndex(false)
          }}
            className='h-10 w-24 bg-green-400 rounded-lg'>back</button>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          {!index ?
            <Firstlist setIndex={(val) => setIndex(val)} list={list} add={add} setAdd={(val) => setAdd(val)} setList={(val) => setList(val)} /> :
            <Back setIndex={(val) => setIndex(val)} add={add} list={list} setList={(val) => setList(val)} setAdd={(val) => setAdd(val)} />}

        </div>
      </div>
    </div>
  )
}

export default App
