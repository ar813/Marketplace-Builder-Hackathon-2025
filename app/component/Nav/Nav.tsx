"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";

const Nav = () => {
    const [isNav, setIsNav] = useState(false)
    return (
        <div>
            <div className="h-[60px] flex items-center justify-between px-[20px] lg:px-[50px]">

                <Link href={"/"}><Image src={"/images/nikeOne/Vector.svg"} alt="Frames" width={60} height={20} ></Image></Link>

                <ul className="gap-[24px] font-[500] hidden lg:flex">
                    <li className="relative group">
                        <Link href="/allProducts" className="relative">
                            New & Featured
                            <span className="absolute top-5 left-0 w-0 h-[2px] bg-[black] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="" className="relative">
                            Men
                            <span className="absolute top-5 left-0 w-0 h-[2px] bg-[black] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="" className="relative">
                            Women
                            <span className="absolute top-5 left-0 w-0 h-[2px] bg-[black] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="" className="relative">
                            Kids
                            <span className="absolute top-5 left-0 w-0 h-[2px] bg-[black] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="" className="relative">
                            Sale
                            <span className="absolute top-5 left-0 w-0 h-[2px] bg-[black] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                    <li className="relative group">
                        <Link href="" className="relative">
                            SNKRS
                            <span className="absolute top-5 left-0 w-0 h-[2px] bg-[black] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                </ul>


                <div className="flex gap-[15px] items-center">
                    <div className="rounded-[30px] w-[35px] h-[35px] flex justify-center items-center bg-red-500 text-white shadow-lg">
                        <Link href={"/addToWishList"}><IoMdHeartEmpty className="text-[24px]" /></Link>
                    </div>
                    <div className="rounded-[30px] w-[35px] h-[35px] flex justify-center items-center bg-blue-500 text-white shadow-lg ">
                        <Link href={"/addToCart"}><IoBagOutline className="text-[24px]" /></Link>
                    </div>
                    <IoReorderThreeOutline className="text-[24px] lg:hidden" onClick={() => { setIsNav(!isNav) }} />
                </div>
            </div>
            <div className={`absolute w-[70%] right-0 h-screen bg-[black] text-[white] p-[30px] ${isNav ? "block" : "hidden"} `}>
                <ul className="gap-[10px] grid font-[500]">
                    <li><Link href={"/allProducts"}>New & Featured</Link></li>
                    <li><Link href={""}>Men</Link></li>
                    <li><Link href={""}>Women</Link></li>
                    <li><Link href={""}>Kids</Link></li>
                    <li><Link href={""}>Sale</Link></li>
                    <li><Link href={""}>SNKRS</Link></li>
                </ul>
            </div>
        </div >
    )
}

export default Nav