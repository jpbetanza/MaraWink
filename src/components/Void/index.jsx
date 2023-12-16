const Void = ({css, reff})=>{
    return(
        <div ref={reff} className={`${css} flex justify-center w-full h-full items-center bg-opacity-20 rounded-lg select-none hover:cursor-pointer`}>
            
        </div>
    )
}
export default Void