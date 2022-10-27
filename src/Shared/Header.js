import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authentication/AuthProvider';
import { Image } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../logo.png'
import toast from 'react-hot-toast';
import DarkMode from '../DarkMode';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
        toast.success('Loged Out')
        navigate(from, { replace: true });
    }





    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  >
            <Container>
                <Navbar.Brand><img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                /><Link to='/' className='text-decoration-none text-dark fw-bold'>Online <span className='text-warning'>Tutor</span></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='p-2'>
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/' className='text-decoration-none text-dark fw-bold'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/courses' className='text-decoration-none text-dark fw-bold'>Courses</Link></Nav.Link>
                        <Nav.Link><Link to='/blog' className='text-decoration-none text-dark fw-bold'>Blog</Link></Nav.Link>
                    </Nav>


                    {
                        user?.uid ?
                            <>
                                <Nav>
                                    <NavDropdown title={<Image
                                        style={{ height: '40px' }} roundedCircle
                                        src={user?.photoURL}></Image>} className='fw-bold' id="collasible-nav-dropdown">
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <h6>{user.displayName}</h6>
                                            <NavDropdown.Item className='text-center' onClick={handleLogOut}>
                                                Log Out
                                            </NavDropdown.Item>
                                        </div>
                                    </NavDropdown>
                                </Nav>
                            </>
                            :
                            <>
                                <Nav>
                                    <Nav.Link><Link to='/login' className='text-decoration-none text-dark fw-bold'>Login</Link></Nav.Link>
                                    <Nav.Link>
                                        <Link to='/register' className='text-decoration-none text-dark fw-bold'>Register</Link>
                                    </Nav.Link>
                                </Nav>
                            </>
                    }

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;