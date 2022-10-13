import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import { arregloProductos } from "../baseDatos/baseDatos";

export const ItemDetailContainer = ()=>{
    const {id} = useParams(); 
    const [itemProduct, setItemProduct] = useState({});

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(arregloProductos);
        }, 2000);
    })

    useEffect(()=>{
        const getProducto = async()=>{
            const productos = await promesa;
            console.log('productos', productos);
            const producto = productos.find(elemento=>elemento.id === parseInt(id));
            console.log("producto", producto)
            setItemProduct(producto);
        }
        getProducto();
    },[id])

    return(
        <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={itemProduct}/>
        </div>
    )
}