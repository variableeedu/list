import { RxCrossCircled } from "react-icons/rx"

export function Favlist({ fav, setFav }: { fav: string[]; setFav: (val: string[]) => void; }) {
    return (

        <div className='bg-purple-400 p-4   space-y-3'>
            {fav.map((v, i) => {
                return (
                    <div className='h-10 w-[480px]  bg-gray-300 flex justify-between px-3 items-center'><span className='  flex justify-between'>

                        {v}
                    </span>



                    </div>
                )
            })}

        </div>

    )
}