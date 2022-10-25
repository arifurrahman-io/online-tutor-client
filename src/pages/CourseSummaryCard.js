import React from 'react';
import { Button, Container, } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const CourseSummaryCard = ({ course }) => {

    const { title, picture, about, category } = course;

    return (

        <Container>
            <CardGroup>
                <Card className='my-5'>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <small className="text-muted">Category: {category}</small>
                        <Card.Text>
                            {about}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button>Start Course</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>

    );
};

export default CourseSummaryCard;