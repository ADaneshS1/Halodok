import Card from 'react-bootstrap/Card';
import Heal from './../assets/heal.png'

const Tekss = () => {
    return (
        <Card className="d-flex px-2 col-11" style={{ width: '20rem', flexDirection:"row", alignItems:"center", height:"5rem", gap:"13px"}}>

            <Card.Img src={Heal} style={{width:"32px"}}/>

            <Card.Body style={{fontSize:"2vh", lineHeight:"4vh", padding:"3px 0px"}}>

                <div>
                    <Card.Text> Sambungkan Asuransimu.</Card.Text>
                </div>

                <div>
                    <Card.Text style={{width:"80%", lineHeight:"15px"}}> Dapatkan manfaat asuransi secara langsung untuk layanan Halodoc.</Card.Text>
                </div>

            </Card.Body>

        </Card>
    );
}

export default Tekss;