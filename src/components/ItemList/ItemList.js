
import { Item } from "../Item/Item";
import CardGroup from 'react-bootstrap/CardGroup';
export const ItemList = ({items, otraPropiedad})=>{
    return(
        <div className="estilos-listado">
           <CardGroup style={{ width: '50%', margin:'10px',} }>
            {
                items.map(producto=>(
                    <Item key={producto.id} item={producto}/>
                ))
            }
        </CardGroup>
        </div>
    )
}
