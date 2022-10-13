const[contador,setContador]=useState(0)
const incrementarContador=()=>{
    setContador(contador+1)
}
const disminuirContador=()=>{
    setContador(contador-1)
    
}
return(
    <>
    <button onClick={incrementarContador}> Añadair </button>
    <button onClick={disminuirContador}> Eliminar </button>
    </>
)
