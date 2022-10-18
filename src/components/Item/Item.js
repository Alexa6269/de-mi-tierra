import { Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    console.log("item",item)
    return (
        <>
        <Card border="success" style={{ width: '50%' }}>
             <Card.Img src={item.PictureUrl}/>
             <Card.Body>
             <Card.Title>{item.title}</Card.Title>
             <Card.Text> {item.precio}</Card.Text>
             </Card.Body>
             <Stack gap={2} className="col-md-5 ">
            <Button variant="secondary"><Link to="/item/{item.id}">Ver más</Link></Button>
            <Button variant="success">Añadir al carrito</Button>
            </Stack>
          
         </Card>
           
        </>
    )
}
