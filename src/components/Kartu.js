import Card from 'react-bootstrap/Card';

const Kart = (props) => {
    return (
        <Card style={{ width: '13%', height:"85%", padding:"5px", margin:"5px" }}>
          <Card.Img variant="top" style={{width:"6vw", margin:"auto", padding:"2px"}} src={props.image} />
          <Card.Body>
            <Card.Title style={{fontSize:"12px", fontWeight:"600", textAlign:"center"}}>{props.para}</Card.Title>
          </Card.Body>
        </Card>
      );
}

export default Kart;