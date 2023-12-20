import { useEffect,useRef } from "react"

const Init = ({onclick}) => {
    const buttonRef = useRef(null)

    useEffect(()=>{
        const allwaysFocus = async () => {
            buttonRef.current.focus();
            setTimeout(()=>allwaysFocus(),100)
        }
        allwaysFocus();
    },[])

    return(
        <div className="flex flex-col items-center gap-8">
            <h1 className="text-center p-5 text-white">Quando a câmera carregar, pisque um olho para iniciar o teclado</h1>
            <button ref={buttonRef} onClick={onclick} className="rounded-lg text-white bg-slate-700 px-3 py-2 focus">Abrir teclado</button>
        </div>
    )
}

export default Init