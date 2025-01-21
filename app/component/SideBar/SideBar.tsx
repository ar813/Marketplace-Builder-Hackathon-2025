"use client"

import { useState } from "react"
import { IoIosArrowUp } from "react-icons/io";


const SideBar = () => {

    const [gender, setGender] = useState(false)
    const [kid, setKid] = useState(false)
    const [shopByPrice, setShopByPrice] = useState(false)

    

    return (
        <div className="lg:w-[20%] mt-[60px] lg:pr-[50px]">
            <h1 className="text-[24px] font-[500] mb-[20px]">New (100)</h1>

            <div className="grid gap-[8px] font-[500] text-[15px] pb-[20px] lg:border-r-[7px] border-r-[gray]">
                {[
                    "Shoes",
                    "Sports Bras",
                    "Tops & T-Shirts",
                    "Hoodies & Sweatshirts",
                    "Jackets",
                    "Trousers & Tights",
                    "Shorts",
                    "Tracksuits",
                    "Jumpsuits & Rompers",
                    "Skirts & Dresses",
                    "Socks",
                    "Accessories",
                    "Equipment",
                ].map((item) => (
                    <h1 key={item} className="cursor-pointer active:text-[#4d79ff]">{item}</h1>
                ))}
            </div>

            <div>
                <div onClick={() => { setGender(!gender) }} className="flex mb-[10px] items-center justify-between mt-[20px] font-[550] text-[15px]  ">
                    <h1>Gender</h1>
                    <IoIosArrowUp className={`cursor-pointer ${gender ? "rotate-180" : ""} transition-transform duration-300`} />
                </div>
                <div className={`${gender ? "block" : "hidden"} transition-transform duration-300`}>
                    <div className="flex items-center gap-[5px]">
                        <input type="checkbox" />
                        <h1>Men</h1>
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <input type="checkbox" />
                        <h1>Women</h1>
                    </div>
                    <div className="flex items-center gap-[5px] mb-[20px]">
                        <input type="checkbox" />
                        <h1>Unisex</h1>
                    </div>
                </div>
            </div>
            <div>
                <div onClick={() => { setKid(!kid) }} className="flex  mb-[10px]  pt-[20px] border-t-[1px] border-t-[#ccc] items-center justify-between font-[550] text-[15px]">
                    <h1>Kid</h1>
                    <IoIosArrowUp className={`cursor-pointer ${kid ? "rotate-180" : ""} transition-transform duration-300`} />
                </div>
                <div className={`${kid ? "block" : "hidden"} transition-transform duration-300`}>
                    <div className="flex items-center gap-[5px]">
                        <input type="checkbox" />
                        <h1>Boys</h1>
                    </div>
                    <div className="flex items-center gap-[5px] mb-[20px]">
                        <input type="checkbox" />
                        <h1>Girls</h1>
                    </div>
                </div>
            </div>
            <div>
                <div onClick={() => { setShopByPrice(!shopByPrice) }} className="flex  mb-[10px]  pt-[20px] border-t-[1px] border-t-[#ccc] items-center justify-between font-[550] text-[15px]">
                    <h1>Shop By Price</h1>
                    <IoIosArrowUp className={`cursor-pointer ${shopByPrice ? "rotate-180" : ""} transition-transform duration-300`} />
                </div>
                <div className={`${shopByPrice ? "block" : "hidden"} transition-transform duration-300`}>
                    <div className="flex items-center gap-[5px]">
                        <input type="checkbox" />
                        <h1>Under ₹ 2 500.00</h1>
                    </div>
                    <div className="flex items-center gap-[5px]">
                        <input type="checkbox" />
                        <h1>₹ 2 501.00</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SideBar