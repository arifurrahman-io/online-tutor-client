import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const BlogCard = ({ blog }) => {

    const { picture, topic, detail, writer, views, rating } = blog;

    return (
        <Container>
            <CardGroup>
                <Card className='my-3'>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{topic}</Card.Title>
                        <small className="text-muted">Auther: {writer}</small>
                        <Card.Text>
                            {detail}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-evenly'>
                        <small className="text-muted">Views: {views} times</small>
                        <small className="text-muted">Rating: {rating}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>
    );
};

export default BlogCard;