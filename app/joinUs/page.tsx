"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const Page = () => {

    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [address, setAddress] = useState<string>()

    return (
        <div className="min-[425px]:w-[380px] m-auto my-[50px]">
            <div className="p-[20px] grid gap-[20px]">
                <Image src={"/images/nikeOne/Vector.svg"} alt="Frames" width={60} height={20} className="m-auto" ></Image>
                <h1 className="text-center text-[18px] font-bold">BECOME A NIKE MEMBER</h1>
                <p className="text-[14px] text-[gray] text-center w-[282px] m-auto">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Email address" className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] outline-none focus:border-[#4c8bf5] transition-all duration-200" />
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] outline-none focus:border-[#4c8bf5] transition-all duration-200" />
                <input onChange={(e) => { setFirstName(e.target.value) }} type="text" placeholder="First Name" className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] outline-none focus:border-[#4c8bf5] transition-all duration-200" />
                <input onChange={(e) => { setLastName(e.target.value) }} type="text" placeholder="Last Name" className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] outline-none focus:border-[#4c8bf5] transition-all duration-200" />
                <textarea onChange={(e) => { setAddress(e.target.value) }} placeholder="Address" className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] outline-none focus:border-[#4c8bf5] transition-all duration-200" ></textarea>
                <select className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] text-[gray] outline-none focus:border-[#4c8bf5] transition-all duration-200" >
                    <option>Pakistan</option>
                </select>
                <div className="flex gap-[10px] items-center">
                    <input type="checkbox" onChange={(e) => {
                        if (e.target.checked) {
                            if (email) localStorage.setItem('email', email);
                            if (password) localStorage.setItem('password', password);
                            if (firstName) localStorage.setItem('firstName', firstName);
                            if (lastName) localStorage.setItem('lastName', lastName);
                            if (address) localStorage.setItem('address', address);

                            alert("successfully saved information")
                        }
                    }} />
                    <p className="text-[gray] text-[12px]">Do you want to save the above information!</p>
                </div>
                <p className="text-[12px] text-[gray] text-center w-[279px] m-auto">By logging in, you agree to Nike&apos;s <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Use.</span></p>
                {email && password && firstName && lastName && address ? (
                    <Link href="/allProducts">
                        <button className="w-full text-center py-[10px] px-[15px] bg-[black] text-[white] rounded-[4px] hover:bg-white hover:text-black border-[1px] border-[black]">
                            JOIN US
                        </button>
                    </Link>
                ) : (
                    <button
                        disabled
                        className="w-full text-center py-[10px] px-[15px] bg-[gray] text-[white] rounded-[4px] cursor-not-allowed border-[1px] border-[gray]"
                    >
                        JOIN US
                    </button>
                )}

                <p className="text-[12px] text-[gray] text-center">Not a Member? <span className="text-[black]"><Link href={"/signUp"}>Sign In.</Link></span></p>
            </div>
        </div>
    )
}

export default Page