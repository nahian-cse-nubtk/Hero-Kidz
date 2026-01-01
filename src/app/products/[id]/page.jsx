import { getSingleProductData } from '@/actions/server/product';
import ProductDetailsCard from '@/components/cards/ProductDetailsCard';
import React from 'react';

const page =async({params}) => {
    const {id} = await params
    const product = await getSingleProductData(id)
    return <ProductDetailsCard product={product} key={product._id}></ProductDetailsCard>
};

export default page;
