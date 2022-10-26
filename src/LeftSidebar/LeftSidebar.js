import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftSidebar.css'

const LeftSidebar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories/')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className='card-grid'>
            <h4 className='text-white'>Categories: {categories.length}</h4>
            <div className=''>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-white fw-bold'>{category.category}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSidebar;