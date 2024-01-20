import { useState } from 'react'
import { Firstlist } from './list';
import { Back } from './shift';
import { Favlist } from './Favlist';


function App() {
  const [input, setInput] = useState<string>("")
  const [list, setList] = useState<string[]>([])
  const [add, setAdd] = useState<string[]>([])
  const [fav, setFav] = useState<string[]>([])
  const [index, setIndex] = useState(0)


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
            setIndex(1)
          }} className='h-10 w-24 bg-green-400 rounded-lg'>List 1</button>
          <button onClick={() => {
            setIndex(2)
          }}
            className='h-10 w-24 bg-green-400 rounded-lg'>List 2</button>
          <button onClick={() => {
            setIndex(3)
          }} className='h-10 w-24 bg-green-400 rounded-lg'>List 3</button>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          {index === 1 ?
            <Firstlist list={list} add={add} fav={fav} setFav={(val) => setFav(val)} setAdd={(val) => setAdd(val)} setList={(val) => setList(val)} />
            : index === 2 ?
              <Back add={add} list={list} setList={(val) => setList(val)} setAdd={(val) => setAdd(val)} />
              : index === 3 ?
                <Favlist fav={fav} setFav={(val) => setFav(val)} />
                : "not selected"}

        </div>
      </div>
    </div>
  )
}

export default App
