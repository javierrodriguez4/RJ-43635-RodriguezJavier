import React, { useEffect, useState } from 'react'
import { products } from '../../productsMock'
import { useParams } from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ItemCount } from '../itemCount/ItemCount';
import { ItemDetail } from '../itemDetail/ItemDetail';


export const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()

  useEffect( ()=>{

    const productSelected = products.find( producto => producto.id === parseInt(id) )
    setProduct(productSelected)

  }, [id])

  return (
    <ItemDetail product={product} />
  )
}
