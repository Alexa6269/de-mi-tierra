
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ItemDetail = ({item})=>{
    alert(item)
    return(
        <>
            <Card border="success" style={{ width: '50%' }}>
                <Card.Img src={item.PictureUrl}/>
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text> $ {item.precio}</Card.Text>
                </Card.Body>
              
                <Button variant="success">Añadir al carrito</Button>
         
          
            </Card>
        </>
    )
}