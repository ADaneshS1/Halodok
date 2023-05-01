import Figure from 'react-bootstrap/Figure';

const Fig2 = (props) => {
    return (
            <Figure style={{textAlign:"center", margin:"5px 10px"}}>
                <Figure.Image width={50} height={50} src={props.image}/>
                <Figure.Caption>{props.para}</Figure.Caption>
            </Figure>
    )
}

export default Fig2;