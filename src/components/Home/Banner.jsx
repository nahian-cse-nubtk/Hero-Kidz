
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className=' flex flex-col md:flex-row justify-between items-center py-5 px-5'>
            <div className='flex-1 space-y-2'>
                <h1 className='text-4xl font-bold text-primary'>Gift a Toy of Your Children</h1>
                <p className=' text-3xl font-blod leading-10'>Every toy with 15% discount</p>
                <button className='btn btn-primary text-white mt-3'>Explore Products</button>
            </div>
            <div className='flex-1'>
                <Image alt='hero image' src={"/assets/hero.png"} width={500} height={400}></Image>
            </div>

        </div>
    );
};

export default Banner;