import { useEffect } from "react"

const Display = ({reff, letras, onclick, css, time})=>{

    return(
        <button ref={reff} onClick={onclick} className={`${css} group rounded-lg grid ${letras.length>1 ? 'grid-rows-2 grid-cols-3' : 'grid-rows-1 grid-cols-1'} bg-white bg-opacity-20 justify-center h-full items-center select-none hover:cursor-pointer`}>
            
            {letras.length>1 && letras.map((letra)=>(
                <div className="flex justify-center items-center w-full h-full  rounded-lg select-none hover:cursor-pointer">
                    <h1 className="text-white">{letra}</h1>
                </div>
            ))}
            {letras.length==1 && (
                <div className="flex justify-center items-center w-full h-full  rounded-lg select-none hover:cursor-pointer">
                    <h1 className="text-white">{letras}</h1>
                </div>
            )}

            <div className={`h-1 w-0 bg-white rounded-b-lg col-span-3 group-focus:w-full group-focus:duration-[2000ms] ease-linear`}></div>

        </button>
    )
}
export default Display