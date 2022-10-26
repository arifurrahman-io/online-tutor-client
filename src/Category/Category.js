import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import CourseSummaryCard from '../pages/CourseSummaryCard';
import './Category.css'

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <Container>
            <Row className='mt-4'>
                <Col lg='4'>
                    <LeftSidebar></LeftSidebar>
                </Col>
                <Col lg='8'>
                    <h5 className='text-center'>Totat {categoryCourse.length} courses in this category</h5>
                    <div className='course-card'>
                        {
                            categoryCourse.map(course => <CourseSummaryCard
                                key={course.id}
                                course={course}
                            ></CourseSummaryCard>)
                        }
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Category;