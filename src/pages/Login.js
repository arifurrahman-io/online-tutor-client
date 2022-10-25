import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authentication/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const { signIn } = useContext(AuthContext);


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

    return (
        <div className=''>
            <Form onSubmit={handleSubmit} className='w-25 mx-auto my-5'>
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
            </Form>
            <div>
                <h5>You may Login with</h5>

                <Button variant="outline-primary" className='mx-2'><FaGoogle /> Google</Button>
                <Button variant="outline-primary" className='mx-2'><FaGithub /> GitHub</Button>

            </div>
        </div>
    );
};

export default Login;