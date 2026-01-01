"use client"
import { usePathname, useRouter } from "next/navigation";
import React from "react";


const CardButton = ({product}) => {
    const isLogin = false;
    const router = useRouter()
    const path = usePathname()
    const handleAddToCart = ()=>{
        if(isLogin){
            alert(product._id)
        }
        else{
            router.push(`/login?callbackUrl=${path}`)
        }
    }
  return (
    <div>
      <button onClick={handleAddToCart} className="btn btn-primary  w-full">Add to Cart</button>
    </div>
  );
};

export default CardButton;
