import Card from 'react-bootstrap/Card';

const Carartik = (props) => {
    return (
        <Card style={{marginTop:"25px"}}>
            <Card.Img variant="top" style={{width:"100%"}} src={props.image} />
            <Card.Body>
                <Card.Title style={{fontSize:"14px"}}>{props.judul}</Card.Title>
                <p style={{fontSize:"12px", backgroundColor:"gray", padding:"3px 7px", width:"max-content", color:"#fff", borderRadius:"3px"}}>{props.tema}</p>z
                <Card.Text style={{fontSize:"13px"}}>{props.paraf}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Carartik;