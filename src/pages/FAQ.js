import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import img from '../faq.jpg'

const FAQ = () => {
    return (
        <Container>
            <div className='my-5 d-md-flex'>
                <div className='col col-md-6'>
                    <Image src={img} className='img-fluid'></Image>
                </div>
                <Accordion defaultActiveKey={['0']} alwaysOpen className='col col-md-6 d-md-flex flex-column justify-content-center '>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the payment system?</Accordion.Header>
                        <Accordion.Body>
                            You may pay us by any debite or credite card, mobile banking like bKash, Rocket, Nagad etc...
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Have there any money return policy?</Accordion.Header>
                        <Accordion.Body>
                            Yes! After enrollment to any course, if you think it is not for you, then you can apply for refund according to our refund policy. We do not grand any refund more than 24 houres of course enrollment.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    );
};

export default FAQ;