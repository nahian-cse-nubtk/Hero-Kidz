
import Image from "next/image";
import React from "react";
import Link from 'next/link';
const ProductCard = ({ product }) => {
  const {
    title,
    image,
    price,
    discount,
    reviews,
    ratings,
    _id
  } = product;

  const discountedPrice = Math.round(
    price - (price * discount) / 100
  );

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition duration-300">
      <figure className="relative">
        <Image
        width={500}
        height={400}
          src={image}
          alt={title}
          className="h-52 w-full object-cover"
        />
        {discount > 0 && (
          <span className="badge badge-error absolute top-3 left-3 text-white">
            {discount}% OFF
          </span>
        )}
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-base font-semibold line-clamp-2">
          {title}
        </h2>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-yellow-500">★ {ratings}</span>
          <span className="text-gray-500">({reviews} reviews)</span>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="line-through text-sm text-gray-400">
              ৳{price}
            </span>
          )}
        </div>

        <div className="card-actions justify-between mt-4">
          <Link href={`/products/${_id}`} className="btn btn-outline btn-sm">
            View Details
          </Link>
          <button className="btn btn-primary btn-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
