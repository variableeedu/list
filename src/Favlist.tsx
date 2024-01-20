import { RxCrossCircled } from "react-icons/rx"

export function Favlist({ fav, setFav }: { fav: string[]; setFav: (val: string[]) => void; }) {
    return (

        <div className='bg-purple-400 p-4   space-y-3'>
            {fav.map((v, i) => {
                return (
                    <div className='h-10 w-[480px]  bg-gray-300 flex justify-between px-3 items-center'><span className='  flex justify-between'>

                        {v}
                    </span>
                        {/* <div className=' flex space-x-2 '> */}

                        {/* <button onClick={() => {
                                setList([...list, v])
                               
                            }}
                                className=' bg-blue-300 w-12 rounded-lg'>back</button> */}

                        {/* <RxCrossCircled onClick={() => {
                                setAdd(add.filter((_, ind) => {
                                    return ind != i
                                }))
                                // setList(list.splice(i,1))
                            }} className='bg-blue-300 h-8  w-7 rounded-lg  h-full' /> */}
                        {/* </div> */}



                    </div>
                )
            })}

        </div>

    )
}