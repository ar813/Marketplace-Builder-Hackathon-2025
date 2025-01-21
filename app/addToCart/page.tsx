"use client"

import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../component/Button/Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoBagOutline } from "react-icons/io5";

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
    const [cart, setCart] = useState<Product[]>([]);
    const [wishList, setWishList] = useState<Product[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("productsCart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }

        const storedList = localStorage.getItem("wishList");
        if (storedList) {
            setWishList(JSON.parse(storedList));
        }
    }, []);

    const handleDelete = (productName: string) => {
        const updatedCart = cart.filter(item => item.productName !== productName);
        setCart(updatedCart);
        localStorage.setItem("productsCart", JSON.stringify(updatedCart));

        alert(`Item have successfully removed from the cart!`);
    };

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    const addToWishList = (product: Product) => {
        const wishList: Product[] = JSON.parse(localStorage.getItem("wishList") || "[]");

        // Check if the product is already in the wishlist
        const isProductInWishList = wishList.some((item) => item.productName === product.productName);

        if (isProductInWishList) {
            alert("This product is already in your wishlist!");
            return; // Prevent adding the product again
        }

        wishList.push(product);
        localStorage.setItem("wishList", JSON.stringify(wishList));

        alert(`Item have successfully added to the wish list!`);
    };

    const addToCart = (product: Product) => {
        const cart: Product[] = JSON.parse(localStorage.getItem("productsCart") || "[]");

        // Check if the product is already in the cart
        const isProductInCart = cart.some((item) => item.productName === product.productName);

        if (isProductInCart) {
            alert("This product is already in your cart!");
            return; // Prevent adding the product again
        }

        cart.push(product);
        localStorage.setItem("productsCart", JSON.stringify(cart));

        alert(`Item have successfully added to the cart!`);
    };

    return (
        <div className="p-[20px] md:p-[50px] lg:px-[100px] lg:pb-[10px] lg:pt-[50px]">
            <div className="lg:flex">
                <div className="lg:w-[75%]">
                    <div className="p-[20px] bg-[#E5E5E5]">
                        <h1 className="text-[13px] font-[500] mb-[5px]">Free Delivery</h1>
                        <p className="text-[11px]">Applies to orders of ₹ 14 000.00 or more. <span className="sm:ml-[10px] underline sm:inline block"><Link href={"/checkout"}>View details</Link></span></p>
                    </div>
                    <h1 className="text-[22px] font-[500] my-[20px]">Bag</h1>

                    {cart.length > 0 ? (
                        <div>
                            {cart.map((item, index) => (
                                <div key={index} className="flex flex-col gap-[30px] sm:flex-row py-[20px] border-b-[1px] border-b-[#ccc]">
                                    <Link href={item.productName}><img src={item.image} alt="boy" width={60} height={20} className="w-full sm:w-[150px] sm:h-[150px]"></img></Link>
                                    <div className="flex flex-col gap-[10px]">
                                        <div className="flex justify-between items-center">
                                            <Link href={item.productName}><h1>{item.productName}</h1></Link>
                                            <h1 className="hidden sm:block sm:ml-[60px]">MRP: ₹ {item.price}</h1>
                                        </div>
                                        <div className="text-[gray] flex flex-col gap-[5px]">
                                            <h1>{item.category}</h1>
                                            <h1 className="line-clamp-1 w-[200px]">{item.description}</h1>
                                            <h1>{item.colors} <span className="ml-[50px]">Quantity <input type="number" placeholder="1" className="outline-none p-[2px] w-[40px]" /></span></h1>
                                        </div>
                                        <div className="flex gap-[10px] text-[24px] mt-[20px]">
                                            <FaRegHeart onClick={() => { addToWishList(item) }} className="hover:text-red-500" />
                                            <RiDeleteBin6Line className="cursor-pointer hover:text-[#ffa940]" onClick={() => handleDelete(item.productName)} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}


                </div>
                <div className="lg:w-[25%] lg:ml-[30px] mt-[50px] lg:mt-[0px]">
                    <h1 className="text-[21px] font-[500] mb-[20px]">Summary</h1>
                    <div className="flex justify-between items-center mb-[10px]">
                        <h1 className="text-[15px]">Subtotal</h1>
                        <h1 className="text-[15px]">₹ {totalPrice.toFixed(2)}</h1>
                    </div>
                    <div className="flex justify-between items-center pb-[20px] border-b-[1px] border-b-[#ccc]">
                        <h1 className="text-[15px]">Estimated Delivery & Handling</h1>
                        <h1 className="text-[15px]">Free</h1>
                    </div>
                    <div className="flex justify-between items-center py-[20px] border-b-[1px] border-b-[#ccc]">
                        <h1 className="text-[15px]">Total</h1>
                        <h1 className="text-[15px]">₹ {totalPrice.toFixed(2)}</h1>
                    </div>
                    <Link href={"/checkout"}><Button value="Member Checkout" className="w-full mt-[40px]" /></Link>
                </div>
            </div>
            <div className="my-[40px]">
                <h1 className="text-[21px] font-[500] mb-[50px]">Favourites</h1>
                {wishList.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
                        {wishList.map((item, index) => (
                            <div key={index} className='grid gap-[10px] relative'>
                                <div className="grid gap-[15px] text-[29px] absolute right-[14px] top-[14px]">
                                    <div onClick={() => { addToCart(item) }} className="rounded-[30px] bg-[white] w-[35px] h-[35px] flex justify-center items-center hover:bg-blue-500 hover:text-white hover:shadow-lg transition duration-200 ease-in-out">
                                        <IoBagOutline className="text-[19px]" />
                                    </div>
                                </div>
                                <div className="w-full rounded-[8px]">
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