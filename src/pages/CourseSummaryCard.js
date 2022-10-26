import React from 'react';
import { Button, Container, } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const CourseSummaryCard = ({ course }) => {

    const { id, title, picture, about, category, price } = course;

    return (

        <Container>
            <CardGroup className=''>
                <Card className='my-4 '>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <small className="text-muted">Category: {category}</small>
                        <Card.Text>
                            {about.length > 200 ?
                                <p>{about.slice(0, 200) + '...'}</p> :
                                <p>{about}</p>
                            }
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-evenly align-items-center'>
                        <Link to={`/course/${id}`}><Button>Start Course</Button></Link>
                        <h5 className='text-primary'>{price} TK</h5>

                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>

    );
};

export default CourseSummaryCard;