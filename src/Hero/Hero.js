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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe, alias ullam tempore natus voluptatem sed hic voluptates eveniet sunt laudantium praesentium ratione mollitia amet quod cum accusantium aliquam? Voluptate.</p>
                <Link to='/courses'><Button>Star Now <FaLongArrowAltRight /></Button></Link>
            </div>
        </div>
    );
};

export default Carousel;