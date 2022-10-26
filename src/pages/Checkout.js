import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData();
    const { title, picture, about, category, price } = data;
    return (
        <Container className='my-3'>
            <div className="card mb-3">
                <div className="row g-3">
                    <div className="col-md-4">
                        <img src={picture} className="img-fluid rounded-start" alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{about.slice(0, 150) + '...'}</p>
                            <p className="card-text"><small className="text-muted">{category}</small></p>
                            <p>{price} TK</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    );
};

export default Checkout;