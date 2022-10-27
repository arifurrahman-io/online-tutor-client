import React, { useContext } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../authentication/AuthProvider';

const Checkout = () => {
    const data = useLoaderData();
    const { title, picture, about, price } = data;

    const coursePrice = parseInt(price);
    const vat = coursePrice * 0.025;
    const gTotal = coursePrice + vat;

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <Container >
            <div className='d-md-flex'>
                <div className='col col-md-4 bg-light m-3 p-4 rounded'>
                    <h5>Customer's Detail</h5>
                    <Image src={user.photoURL} rounded style={{ width: '80px' }}></Image>
                    <div><p className='m-0'>{user?.displayName}</p></div>
                    <div><p className='m-0'>{user?.email}</p></div>
                </div>
                <div className='col col-md-8 rounded'>
                    <div className='d-md-flex bg-light m-3 p-4'>
                        <div >
                            <img src={picture} style={{ width: 150 }} className="rounded" alt="" />
                        </div>
                        <div className='mx-md-3'>
                            <h5 className='fw-bold text-warning'>{title}</h5>
                            <p >{about.slice(0, 100) + '...'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='col col-md-4 bg-light m-3 p-4 rounded'>
                    <div className=' d-flex justify-content-between'><p>Price of the course:</p><p> {coursePrice} Tk</p></div>
                    <div className=' d-flex justify-content-between'><p>2.5% VAT for the course:</p><p> {vat} Tk</p></div>
                    <div className=' d-flex justify-content-between fw-bold text-success'><p>Grand total:</p><p> {gTotal} Tk</p></div>
                </div>
            </div>

        </Container >
    );
};

export default Checkout;