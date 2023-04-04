import Card from 'react-bootstrap/Card';
import Heal from './../assets/heal.png'

const Tekss = () => {
    return (
        <Card className="d-flex px-2" style={{ width: '20rem', flexDirection:"row", alignItems:"center", height:"5rem", gap:"13px"}}>

            <Card.Img src={Heal} style={{width:"32px"}}/>

            <Card.Body style={{fontSize:"2vh", lineHeight:"0.5vh", padding:"2px 0px"}}>
                <Card.Text> Sambungkan Asuransimu.</Card.Text>
                <Card.Text style={{width:"75%", lineHeight:"15px"}}> Dapatkan manfaat asuransi secara langsung untuk layanan Halodoc.</Card.Text>
            </Card.Body>

        </Card>
    );
}

export default Tekss;