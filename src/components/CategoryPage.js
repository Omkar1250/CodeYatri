import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import Blogs from './Blogs';
import Pagination from './Pagination';
import Header from './Header';

export default function CategoryPage() {
    const navigate = useNavigate(); // Change to useNavigate
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div>
            <Header />
            <div>
                <button className='rounded-md border px-4 py-1 '
                 onClick={() => navigate(-1)}> {/* Change to navigate */}
                    Back
                </button>
                <h2>
                    Blogs on <span>{category}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    );
}
