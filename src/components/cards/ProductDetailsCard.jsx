
import { banglaFont } from "@/app/layout";
import Image from "next/image";
import CardButton from "../buttons/CardButton";

const ProductDetailsCard = ({ product }) => {
  const {
    title,
    bangla,
    image,
    price,
    discount,
    description,
    ratings,
    reviews,
    sold,
    info,
  } = product;

  const discountedPrice = Math.round(
    price - (price * discount) / 100
  );

  return (
    <div>
    <div className="card bg-base-100 shadow-lg p-6 lg:flex lg:flex-row gap-6">
      {/* Image Section */}
      <div className="lg:w-1/2">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 space-y-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className={`${banglaFont.className} text-gray-500`}>{bangla}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-yellow-500 font-semibold">
            ★ {ratings}
          </span>
          <span className="text-gray-500">
            ({reviews} reviews • {sold} sold)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-2">
          <span className="text-2xl font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <>
              <span className="line-through text-gray-400">
                ৳{price}
              </span>
              <span className="badge badge-error text-white">
                {discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* Description */}


        {/* Features */}
        {info?.length > 0 && (
          <ul className={`${banglaFont.className} list-disc list-inside text-sm text-gray-600`}>
            {info.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-4 pt-4">
            <CardButton  product={product}></CardButton>
          <button className="btn btn-primary btn-outline  w-full">
            Buy Now
          </button>
        </div>
      </div>

    </div>
    <div className="space-x-3 py-3">
        <h1 className="text-2xl font-bold">Description</h1>
        <p className={`${banglaFont.className} text-gray-700 whitespace-pre-line`}>
          {description}
        </p>
    </div>
    </div>
  );
};

export default ProductDetailsCard;
