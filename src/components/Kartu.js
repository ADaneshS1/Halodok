import Card from 'react-bootstrap/Card';

const Kart = (props) => {
    return (
        <Card style={{ width: '11rem', padding:"5px", margin:"10px" }}>
          <Card.Img variant="top" style={{width:"80px", margin:"auto", padding:"5px"}} src={props.image} />
          <Card.Body>
            <Card.Title style={{fontSize:"14px", fontWeight:"600", textAlign:"center"}}>{props.para}</Card.Title>
          </Card.Body>
        </Card>
      );
}

export default Kart;