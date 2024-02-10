import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Pagination from './Pagination';
import Blogs from './Blogs';
import Header from './Header';

export default function TagPage() {
    const navigate = useNavigate(); // Change to useNavigate
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);

    return (
        <div className='flex flex-col mx-auto'>
            <Header />
            <div>
                <button className='rounded-md border px-4 py-1 '
                 onClick={() => navigate(-1)}> {/* Change to navigate */}
                    Back
                </button>
                <h2>
                    Blogs Tagged <span className='text-blue-500'>#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    );
}
