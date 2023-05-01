import Card from 'react-bootstrap/Card';

const Fitur = (props) => {
    return (
        <Card className="d-flex px-2" style={{ width: '22rem', flexDirection:"row", alignItems:"center", height:"4rem", gap:"13px"}}>

            <Card.Img style={{width:"15%"}} src={props.image}/>

            <div>
                <Card.Text>{props.paraf}</Card.Text>
            </div>

        </Card>
    );
}

export default Fitur;