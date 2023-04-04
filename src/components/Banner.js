import Card from 'react-bootstrap/Card';

const Bann = (props) => {
    return (
        <Card style={{border:"none", margin:"0px 15px"}}>
            <Card.Img src={props.image} style={{width:"25vw"}}/>
        </Card>
    ) 
}

export default Bann;