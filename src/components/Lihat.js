import Card from 'react-bootstrap/Card';

const Semua = () => {
    return (
        <Card className="d-flex px-2" style={{ width: '22rem', flexDirection:"row", alignItems:"center", height:"4rem", color:"red", textAlign:"center", fontWeight:"600", fontSize:"15px"}}>

            <Card.Body>
                <Card.Text>LIHAT SEMUA</Card.Text>
            </Card.Body>

        </Card>
    );
}

export default Semua;