import React, { useEffect, useState } from 'react'
import { Articulos } from '../Articulos/Articulos';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {useParams} from "react-router-dom"








export const ItemDetailContainer = () => {

    const[item, setItem] = useState();

    const {detalleId} = useParams();


    const getItem =  new Promise(resolve=>{
        setTimeout(()=>
        {
            resolve(Articulos);
        }, 2000);
    });

    useEffect(()=>{
        getItem.then(res=>setItem(res.find(Articulos=>Articulos.id === parseInt(detalleId)))).catch(err=>console.log(err));
    }, [])



        





  return (
    <div>{item?<ItemDetail item={item}/> : <h2>Cargando detalles...</h2>}</div>
  )
}

