import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../authentication/AuthProvider';

const Checkout = () => {
    const data = useLoaderData();
    const { title, picture, about, price } = data;
    const vat = price * 0.025;
    const gTotal = price + vat;
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <Container >
            <div className='d-md-flex'>
                <div className='col col-md-4 bg-light m-3 p-4'>
                    <h5>Customer Details</h5>
                    <div><p className='m-0'>{user?.displayName}</p></div>
                    <div><p className='m-0'>{user?.email}</p></div>
                </div>
                <div className='col col-md-8 m-3'>
                    <div className='d-md-flex bg-light'>
                        <div className='m-4'>
                            <img src={picture} style={{ width: 150 }} className="rounded" alt="" />
                        </div>
                        <div className='m-4'>
                            <h5 >{title}</h5>
                            <p >{about.slice(0, 100) + '...'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col col-md-4 bg-light m-3 p-4'>
                    <div className=' d-flex justify-content-between'><p>Price of the course:</p><p> {price} Tk</p></div>
                    <div className=' d-flex justify-content-between'><p>2.5% VAT for the course:</p><p> {vat} Tk</p></div>
                    <div className=' d-flex justify-content-between'><p>Grand total:</p><p> {gTotal} Tk</p></div>
                </div>

            </div>

        </Container >
    );
};

export default Checkout;