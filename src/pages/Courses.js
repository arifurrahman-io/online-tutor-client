import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import CourseSummaryCard from './CourseSummaryCard';
import './Courses.css'

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <Container>
            <Row className='mt-4'>
                <Col lg='4'>
                    <LeftSidebar></LeftSidebar>
                </Col>
                <Col lg='8'>
                    <h5 className='text-center'>Total {allCourses.length} courses</h5>
                    <div className='course-card'>
                        {
                            allCourses.map(course => <CourseSummaryCard
                                key={course.id}
                                course={course}></CourseSummaryCard>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;