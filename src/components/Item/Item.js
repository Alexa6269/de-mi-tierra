
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Item = (item) => {
    return (
        <>
        <Card  >
             <Card.Img src={item.PictureUrl}/>
             <Card.Body>
             <Card.Title>{item.title}</Card.Title>
             <Card.Text> {item.precio}</Card.Text>
             </Card.Body>
             <Link to={`/item/${item.id}`}>
             <Button  variant="secondary">Ver más</Button>{' '}
             </Link>
             <Button variant="success">Añadir al carrito</Button>{' '}
         </Card>
           
        </>
    )
}
