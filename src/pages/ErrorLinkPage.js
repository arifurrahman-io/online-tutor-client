import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../error404.jpg'

const ErrorLinkPage = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Image src={img} style={{ width: 400 }}></Image>
        </div>
    );
};

export default ErrorLinkPage;