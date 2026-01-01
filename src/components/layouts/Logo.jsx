import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className='flex items-center gap-1'>
            <Image alt="Hero Kidz" src={"/assets/logo.png"}  width={50} height={40}/>
            <h2 className='text-3xl font-bold'>Hero <span className='text-primary'>Kidz</span></h2>

        </div>
    );
};

export default Logo;