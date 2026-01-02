"use client"
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";


const CardButton = ({product}) => {
    const session = useSession();
    const router = useRouter()
    const path = usePathname()
    const handleAddToCart = ()=>{
        if(session.status==="authenticated"){
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
