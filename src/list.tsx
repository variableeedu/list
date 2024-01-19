import { RxCrossCircled } from "react-icons/rx"

export function Firstlist({ list, add, setAdd, setList }: { list: string[]; add: string[]; setAdd: (val: string[]) => void; setList: (val: string[]) => void }) {
    return <div className='bg-red-200 p-4'>
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

}