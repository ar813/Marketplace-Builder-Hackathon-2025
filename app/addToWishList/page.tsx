"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";


type Product = {
    productName: string;
    category: string;
    price: number;
    inventory: number;
    colors: string[];
    status: string;
    image: string;
    description: string;
};

const Page = () => {

    const [wishList, setWishList] = useState<Product[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("wishList");
        if (storedCart) {
            setWishList(JSON.parse(storedCart));
        }
    }, []);

    const handleDelete = (productName: string) => {
        const updatedCart = wishList.filter(item => item.productName !== productName);
        setWishList(updatedCart);
        localStorage.setItem("wishList", JSON.stringify(updatedCart));

        alert(`Item have successfully removed from the favorites!`);
    };

    return (
        <div className="lg:p-[80px] p-[30px] grid gap-[40px] lg:gap-[50px] font-Poppins">
            <div className='grid gap-[40px] lg:gap-[60px]'>
                <div className="flex items-center justify-between">
                    <h1 className="text-[20px]">Wishlist ({wishList.length})</h1>
                </div>
                {wishList.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
                        {wishList.map((item, index) => (
                            <div key={index} className='grid gap-[10px]'>
                                <div className="w-full relative rounded-[8px]">
                                    <div className="grid text-[29px] absolute right-[14px] top-[14px]">
                                        <RiDeleteBinLine onClick={() => (handleDelete(item.productName))} className="bg-white rounded-[50%] p-[5px] hover:bg-[#fec835] hover:text-[white]" />
                                    </div>
                                    <Link href={item.productName}><img src={item.image} alt={item.productName} width={100} height={100} className="w-full"></img></Link>
                                </div>
                                <Link href={item.productName}><h1 className="font-Poppins font-[500] text-[16px]">{item.productName}</h1></Link>
                                <p className="text-[#db4444]">{item.price}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">There are no items saved to your favourites.</p>
                )}
            </div>
        </div>
    )
}

export default Page