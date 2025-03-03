import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">ST</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
                        <Nav.Link as={Link} to="/shows">Shows</Nav.Link>
                        <Nav.Link as={Link} to="/merch">Merch</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link> {/* Updated path to "/contact" */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
