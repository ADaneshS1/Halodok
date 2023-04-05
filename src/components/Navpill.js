import Nav from 'react-bootstrap/Nav';

const Pill = () => {
  return (
        <Nav variant="pills" defaultActiveKey="/home" style={{gap:"5px"}}>

        <Nav.Item style={{border:"1px solid #b3b3b3", borderRadius:"10px"}}>
            <Nav.Link style={{color:"black"}} eventKey="link-1">Terbaru</Nav.Link>
        </Nav.Item>

        <Nav.Item style={{border:"1px solid #b3b3b3", borderRadius:"10px"}}>
            <Nav.Link style={{color:"black"}} eventKey="link-2">Populer</Nav.Link>
        </Nav.Item>

        <Nav.Item style={{border:"1px solid #b3b3b3", borderRadius:"10px"}}>
            <Nav.Link style={{color:"black"}} eventKey="link-3">Kanker</Nav.Link>
        </Nav.Item>

        <Nav.Item style={{border:"1px solid #b3b3b3", borderRadius:"10px"}}>
            <Nav.Link style={{color:"black"}} eventKey="link-4">Cacar Monyet</Nav.Link>
        </Nav.Item>

        <Nav.Item style={{border:"1px solid #b3b3b3", borderRadius:"10px"}}>
            <Nav.Link style={{color:"black"}} eventKey="link-5">Hepatitis</Nav.Link>
        </Nav.Item>

        <Nav.Item style={{border:"1px solid #b3b3b3", borderRadius:"10px"}}>
            <Nav.Link style={{color:"black"}} eventKey="link-6">Kehamilan</Nav.Link>
        </Nav.Item>

        </Nav>
  );
}

export default Pill;