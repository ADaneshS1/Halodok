import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Carartik = (props) => {
    return (
        <Card style={{ width: '20%', marginTop:"25px"}}>
            <Card.Img variant="top" style={{width:"100%"}} src={props.image} />
            <Card.Body>
                <Card.Title>{props.judul}</Card.Title>
                <Button disabled style={{fontSize:"2vh"}}>{props.tema}</Button>
                <Card.Text>{props.paraf}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Carartik;