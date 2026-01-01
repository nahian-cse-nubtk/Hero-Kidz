import Link from 'next/link';
import React from 'react';
import { BiError } from "react-icons/bi";

const NotFound = () => {
    return (
        <div className='my-20'>
            <div className='flex justify-center'>
                <BiError size={100} />
            </div>
            <div className='text-center'>
            <h1 className='text-4xl font-bold my-4'>Opps! page not found</h1>
            <Link href='/' className='btn btn-primary'>Back to home</Link>
            </div>

        </div>
    );
};

export default NotFound;