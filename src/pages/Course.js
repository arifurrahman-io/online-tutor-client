import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './Course.css'
import { FaFilePdf } from "react-icons/fa";
import Pdf from 'react-to-pdf';

const ref = React.createRef();
const Course = () => {
    const course = useLoaderData();
    const { id, title, picture, about, category, price } = course;
    return (
        <Container>
            <div className='course-detail' >
                <div>
                    <div><img src={picture} alt="" /></div>
                </div>
                <div ref={ref}>
                    <div className='course-detail-header'>
                        <small>{category}</small>
                        <h5 className='text-warning'>{price} TK</h5>
                        <Pdf targetRef={ref} filename={title}>{({ toPdf }) => <Button onClick={toPdf} variant="outline-secondary"> Details <FaFilePdf /></Button>}</Pdf>
                    </div>
                    <h5>{title}</h5>
                    <p>{about}</p>
                    <Link className='d-flex justify-content-center text-decoration-none' to={`/checkout/${id}`}><Button>Get Premium Access</Button></Link>
                </div>
            </div>
        </Container>
    );
};

export default Course;