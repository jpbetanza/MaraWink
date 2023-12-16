const TextBox = ({css,text,onclick})=>{
    return(
        <button onClick={onclick} className={`${css} break-words flex justify-center w-full h-full items-center bg-white bg-opacity-90 rounded-lg`}>
            <h1 className="break-all p-1 md:p-3 text-center">{text}</h1>
        </button>
    )
}
export default TextBox