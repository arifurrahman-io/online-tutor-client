import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import CourseSummaryCard from './CourseSummaryCard';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <Row>
            <Col lg='4'>
                <LeftSidebar></LeftSidebar>
            </Col>
            <Col lg='8'>
                <div>
                    <h5>Total {allCourses.length} courses</h5>
                    {
                        allCourses.map(course => <CourseSummaryCard
                            key={course.id}
                            course={course}></CourseSummaryCard>)
                    }
                </div>
            </Col>
        </Row>
    );
};

export default Courses;