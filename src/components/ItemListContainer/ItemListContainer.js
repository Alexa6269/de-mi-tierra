import { useState, useEffect } from "react"
import { arregloProductos } from "../baseDatos/baseDatos"
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup';

export const ItemListContainer = ()=>{
    console.log(useParams()); 
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);
    const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(arregloProductos);
    }, 2000);
})
    useEffect(()=>{
        promesa.then((response)=>{
            if(categoryId){
                
                const productsFiltered = response.filter(elm=>elm.categoria === categoryId);
                setProductos(productsFiltered);
            } else{
               
                setProductos(response)
            }
        })
    },[categoryId])

    console.log("productos", productos);
    return(
        <div>
            <CardGroup>
            <ItemList items={productos} otraPropiedad={123}/>
            </CardGroup>
        </div>
    )
}