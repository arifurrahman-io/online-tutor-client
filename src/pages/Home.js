import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from './CourseSummaryCard';

const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h5>Total {allCourses.length} courses</h5>
            {
                allCourses.map(course => <CourseSummaryCard
                    key={course.id}
                    course={course}></CourseSummaryCard>)
            }
        </div>
    );
};

export default Home;