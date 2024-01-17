import { useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";

function App() {
  const [input, setInput] = useState<string>("")
  const [list, setList] = useState<string[]>([])
  const [add, setAdd] = useState<string[]>([])

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
        <div className="flex gap-3 flex-wrap justify-center">
          <div className='bg-red-200 p-4'>
            {list.map((v, i) => {
              return (
                <div className='h-10 w-[480px] bg-gray-300 flex justify-between px-3 items-center'><span className='  flex justify-between'>

                  {v}
                </span>
                  <div className=' flex  space-x-2'>

                    <button onClick={() => {
                      setAdd([...add, v])
                      setList(list.filter((_, ind) => {
                        return ind != i

                      }))

                    }}
                      className=' rounded-lg bg-blue-300 w-12'>shift</button>
                    <RxCrossCircled onClick={() => {
                      setList(list.filter((_, ind) => {
                        return ind != i
                      }))
                      // setList(list.splice(i,1))
                    }} className='bg-blue-300 h-[30px] rounded-lg w-7  h-full' />
                  </div>



                </div>
              )
            })}

          </div>
          <div className='bg-blue-200 p-4'>
            {add.map((v, i) => {
              return (
                <div className='h-10 w-[480px] bg-gray-300 flex justify-between px-3 items-center'><span className='  flex justify-between'>

                  {v}
                </span>
                  <div className=' flex space-x-2 '>

                    <button onClick={() => {
                      // setAdd(add.reverse())
                      setList([...list, v])
                    }}
                      className=' bg-blue-300 w-12 rounded-lg'>black</button>

                    <RxCrossCircled onClick={() => {
                      setAdd(add.filter((_, ind) => {
                        return ind != i
                      }))
                      // setList(list.splice(i,1))
                    }} className='bg-blue-300 h-8  w-7 rounded-lg  h-full' />
                  </div>



                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
