import { RxCrossCircled } from "react-icons/rx"
import { FaRegStar } from "react-icons/fa";

export function Firstlist({ list, add, setAdd, setList, fav, setFav }: { list: string[]; add: string[]; setAdd: (val: string[]) => void; setList: (val: string[]) => void; fav: string[]; setFav: (val: string[]) => void }) {
    return <div className='bg-red-300 p-4 space-y-3'>
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
                        <FaRegStar onClick={() => {
                            setFav([...fav, v])
                        }} className=" bg-blue-300 h-[28px] rounded-lg w-6" />

                        <RxCrossCircled onClick={() => {
                            setList(list.filter((_, ind) => {
                                return ind != i
                            }))
                            // setList(list.splice(i,1))
                        }} className='bg-blue-300 h-[30px] rounded-lg w-7 ' />
                    </div>



                </div>
            )
        })}

    </div>

}