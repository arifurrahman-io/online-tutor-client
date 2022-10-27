import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='container my-3 text-center'>
            <hr />
            <h5>Follow Us</h5>
            <span className='p-1 fs-3 text-primary'><FaFacebook /></span>
            <span className='p-1 fs-3 text-primary'><FaTwitter /></span>
            <span className='p-1 fs-3 text-primary'><FaWhatsapp /></span>
        </div>
    );
};

export default Footer;