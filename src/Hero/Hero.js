import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../online-courses.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";

const Carousel = () => {
    return (
        <div className='hero'>
            <div className='half-width'>
                <img src={img1} alt="" />
            </div>
            <div className='half-width header-text'>
                <h5>Welcome to Online Tutor</h5>
                <p>Hello Learners, We are providing many courses for you. Are you ready to enroll. Premium access is available where you can get many features.</p>
                <Link to='/courses'><Button>Star Now <FaLongArrowAltRight /></Button></Link>
            </div>
        </div>
    );
};

export default Carousel;