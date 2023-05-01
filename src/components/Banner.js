import Card from 'react-bootstrap/Card';

const Bann = (props) => {
  return (
    <Card style={{ width: "100%", height:"100%", border:"none" }}>
      <Card.Img variant="top" src={props.image} style={{borderRadius:"8px"}} />
    </Card>
  );
}

export default Bann;