
import SkeletonCard from '@/components/cards/SkeletonCard';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-4 gap-3'>
            {
                [...Array(10)].map((_,i)=><SkeletonCard key={i}></SkeletonCard>)
            }

        </div>
    );
};

export default loading;