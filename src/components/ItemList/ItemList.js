import { arregloProductos } from "../baseDatos/baseDatos";
import { Item } from "../Item/Item";
export const ItemList = ({items, otraPropiedad})=>{
    return(
        <div className="estilos-listado">
            <div style={{width:"100%"}}>item list</div>
            {
                arregloProductos.map(producto=>(
                    <Item key={producto.id} item={producto}/>
                ))
            }
        </div>
    )
}
