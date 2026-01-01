import { getProductsData } from '@/actions/server/product';
import React from 'react';
import ProductCard from '../cards/ProductCard';

const Products = async() => {
    const products = await getProductsData()
    return (
        <div className='py-4 '>
            <h1 className='text-4xl font-bold text-center text-secondary my-7'>Our Products</h1>
            <div className='grid grid-cols-4 gap-3'>
                {
                    products.map((product,i)=><ProductCard key={i} product={product}></ProductCard>)
                }

            </div>

        </div>
    );
};

export default Products;