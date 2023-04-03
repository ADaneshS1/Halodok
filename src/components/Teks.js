import Card from 'react-bootstrap/Card';
import Heal from './../assets/heal.png'

const Tekss = (props) => {
    return (
        <Card className="d-flex px-2" style={{ width: '28rem', flexDirection:"row", alignItems:"center", height:"5rem"}}>

            <Card.Img src={Heal} style={{width:"32px"}}/>

            <Card.Body style={{lineHeight:"3vh"}}>
                <Card.Text> Sambungkan Asuransimu.</Card.Text>
                <Card.Text> Dapatkan manfaat asuransi secara langsung untuk layanan Halodoc.</Card.Text>
            </Card.Body>

            <di>></div>

        </Card>
    );
}

export default Tekss;