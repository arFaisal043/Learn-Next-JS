import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between px-10 py-2 bg-blue-600'>
            <Link href="/">Home</Link>
            <div className='flex justify-between gap-3'>
                <Link href="/">Home</Link>
                <Link href="about">About</Link>
                <Link href="blog">Blog</Link>
            </div>
        </div>
    );
};

export default Navbar;