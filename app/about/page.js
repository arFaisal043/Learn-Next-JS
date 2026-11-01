"use client";
import Counter from '@/components/Counter';
import { useState } from 'react';

const about = () => {
    return (
        <div>
            <h1>_______ This is Server Component _____________</h1>
            <h1>This is about page</h1>

            <h1>_______ This is Client Component _____________</h1>
            <Counter />
        </div>
    );
};

export default about;