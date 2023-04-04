import Figure from 'react-bootstrap/Figure';

const Fig1 = (props) => {
    return (
            <Figure style={{textAlign:"center", margin:"5px"}}>
                <Figure.Image width={44} height={44} src={props.image}/>
                <Figure.Caption>{props.para}</Figure.Caption>
            </Figure>
    )
}

export default Fig1;