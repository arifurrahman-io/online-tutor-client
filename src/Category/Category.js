import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import CourseSummaryCard from '../pages/CourseSummaryCard';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <Row>
            <Col lg='4'>
                <LeftSidebar></LeftSidebar>
            </Col>
            <Col lg='8'>
                <div>
                    <h5>This category has {categoryCourse.length} courses</h5>
                    {
                        categoryCourse.map(course => <CourseSummaryCard
                            key={course.id}
                            course={course}
                        ></CourseSummaryCard>)
                    }
                </div>

            </Col>
        </Row>
    );
};

export default Category;