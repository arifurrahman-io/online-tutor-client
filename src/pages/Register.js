import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../authentication/AuthProvider';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email before login.')
            })
            .catch(e => console.error(e));
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(e => {
                console.error(e);
            })
    }

    return (
        <Container className='row'>
            <div className='mx-auto my-5 col-lg-4'>
                <Form onSubmit={handleSubmit}>
                    <h5>Register with Email and Password</h5>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name='name' placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <small className='ms-5'>Alreary have an account? <Link to='/login'>Login</Link></small>
                </Form>
            </div>
        </Container>
    );
};

export default Register;