import { RxCrossCircled } from "react-icons/rx"

export function Back({ add, list, setList, setAdd, }: { add: string[]; list: string[]; setList: (val: string[]) => void; setAdd: (val: string[]) => void }) {
    return <div className='bg-blue-200 p-4   space-y-3'>
        {add.map((v, i) => {
            return (
                <div className='h-10 w-[480px]  bg-gray-300 flex justify-between px-3 items-center'><span className='  flex justify-between'>

                    {v}
                </span>
                    <div className=' flex space-x-2 '>

                        <button onClick={() => {
                            setList([...list, v])
                            setAdd(add.filter((_, ind) => {
                                return ind != i
                            }))
                        }}
                            className=' bg-blue-300 w-12 rounded-lg'>back</button>

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

}