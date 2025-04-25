import { Button } from '@mui/material';
import React from 'react';

const Categories = () => {
    const categories = ['Technology', 'Health', 'Travel', 'Education', 'Food'];

    return (
        <div style={{ display: 'flex' }}>
            {/* Sidebar */}
            <div style={{ width: '200px', padding: '10px', borderRight: '1px solid #ccc' }}>
                <h3>Categories</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {categories.map((category, index) => (
                        <li key={index} style={{ margin: '10px 0' }}>
                            <a href={`#${category.toLowerCase()}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                                {category}
                            </a>
                        </li>
                    ))}
                    <li className='addBlogBtn'><Button variant="contained">Add Blog</Button></li>
                </ul>
            </div>
        </div>
    );
};

export default Categories; 