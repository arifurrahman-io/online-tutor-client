import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authentication/AuthProvider';
import toast from 'react-hot-toast';
import { Container } from 'react-bootstrap';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

    const { signIn, providerLogin } = useContext(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                } else {
                    toast.error('Your email is not verified!')
                }
            })
            .catch(e => console.error(e));
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Your email is verified!')
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));

    }


    const githubProvider = new GithubAuthProvider();
    const handleGitHubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Your email is verified!')
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    return (
        <Container className='row'>
            <div className='col-lg-4 mx-auto my-5'>
                <Form onSubmit={handleSubmit} className=''>
                    <h5>Login with Email and Password</h5>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <small className='ms-5'>Don't have an account? <Link to='/register'>Register</Link></small>
                </Form>
                <div className='mt-5'>
                    <h5>You may Login with</h5>

                    <Button onClick={handleGoogleSignIn} variant="outline-primary" className='me-2'><FaGoogle /> Google</Button>
                    <Button onClick={handleGitHubSignIn} variant="outline-primary" className='me-2'><FaGithub /> GitHub</Button>

                </div>
            </div>
        </Container>
    );
};

export default Login;