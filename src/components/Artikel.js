import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navart = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home" style={{fontSize:"27px"}}>Baca 100+ Artikel Baru</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{color:"red", fontWeight:"600"}}>
                    Lihat Semua
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navart;