import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
    return (
        <Card className= 'my-3 p-3 rounded'>
            <a href = {`/product/${product.id}`}>
                <Card.Img src= {product.image} variant='top'/>           
             </a>
            <Card.Body>
                 <a href= {`/product/${product.id}`}>
                     <Card.Title as ='div'>
                          <strong>{product.name}</strong>        
                     </Card.Title>
                 </a>

                 <Card.Text as='div'>
                    <Rating value= {product.rating} />
                 </Card.Text>

                 <Card.Text as='h3'>${product.price}</Card.Text>
                 <div class="text-center">
                     <a class="btn btn-outline-dark mt-auto" href="#">View options
                     </a>
                 </div>
           </Card.Body>
        </Card>
    )
}

export default Product
