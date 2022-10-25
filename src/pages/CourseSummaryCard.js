import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const CourseSummaryCard = ({ course }) => {

    const { title, picture, about, category } = course;

    return (

        <Container>
            <CardGroup>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={picture} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {about}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">{category}</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </CardGroup>
        </Container>

    );
};

export default CourseSummaryCard;