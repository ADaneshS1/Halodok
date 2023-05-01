import Figure from 'react-bootstrap/Figure';

const Fig1 = (props) => {
    return (
            <Figure style={{textAlign:"center", margin:"0 4px"}}>
                <Figure.Image width={50} height={50} src={props.image}/>
                <p style={{fontSize:"12px"}}>{props.para}</p>
            </Figure>
    )
}

export default Fig1;