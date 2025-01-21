"use client"

import Image from "next/image"
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

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

type City = {
    country: string;
    name: string;
    lat: number;
    lng: number;
};


const Page = () => {

    const [cart, setCart] = useState<Product[]>([]);
    const [contactInformation, setContactInformation] = useState(false)
    const [shipping, setShipping] = useState(false)
    const [payment, setPayment] = useState(false)
    const [delivery, setDelivery] = useState(false)
    const [city, setCity] = useState<City[]>([])


    const [email, setEmail] = useState<string>()
    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [address, setAddress] = useState<string>()

    useEffect(() => {
        async function fetchcities() {
            const url = await fetch("https://gist.githubusercontent.com/immujahidkhan/014fb1629ddc931e6f6d4a3a4d31abaa/raw/8f5cc4f88b9dc4efc5058c5354b9f955e4bda16f/cities.json")
            const response = await url.json()
            setCity(response)
        }
        fetchcities()

        const storedCart = localStorage.getItem("productsCart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }


        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        const storedFirstName = localStorage.getItem('firstName');
        const storedLastName = localStorage.getItem('lastName');
        const storedAddress = localStorage.getItem('address');

        if (storedEmail && storedPassword && storedFirstName && storedLastName && storedAddress) {
            setEmail(storedEmail);
            setFirstName(storedFirstName);
            setLastName(storedLastName);
            setAddress(storedAddress);
        }


    }, []);

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="p-[20px] py-[50px] sm:px-[40px] pd:mx-[60px] lg:px-[200px]">
            <div className="flex flex-col lg:flex-row gap-[50px]">
                <div className="lg:w-[60%]">
                    <h1 className="text-[18px] font-[500]">How would you like to get your order?</h1>
                    <p className="text-[15px] text-[#757575] mt-[8px] line-clamp-4">Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.</p>
                    <p className="text-[15px] text-[#757575]">Learn More</p>

                    <div className="mt-[30px]">

                        {/* Contact Information */}
                        <div>
                            <div onClick={() => { setContactInformation(!contactInformation) }} className="flex justify-between items-center">
                                <h1 className="py-[20px] text-[21px]">Contact Information</h1>
                                <IoIosArrowUp className={`${contactInformation ? "rotate-180" : ""} transition-all duration-200`} />
                            </div>

                            <div className={`grid gap-[18px] mt-[10px] mb-[40px] ${contactInformation ? "block" : "hidden"}`}>
                                <div className="flex justify-between items-center gap-[20px]">
                                    <input type="text" value={firstName || ""} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px] outline-none focus:border-[#4c8bf5] transition-all duration-200" />
                                    <input type="text" value={lastName || ""} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px] outline-none focus:border-[#4c8bf5] transition-all duration-200" />
                                </div>
                                <input type="email" value={email || ""} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px] outline-none focus:border-[#4c8bf5] transition-all duration-200" />
                                <input type="text" placeholder="Phone Number" className="p-[10px] border-[1px] border-[#ccc] w-full rounded-[4px] outline-none focus:border-[#4c8bf5] transition-all duration-200" />
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div>
                            <div onClick={() => { setShipping(!shipping) }} className="flex justify-between items-center border-t-[1px] border-t-[#ccc] ">
                                <h1 className="py-[20px] text-[21px]">Shipping Address</h1>
                                <IoIosArrowUp className={`${shipping ? "rotate-180" : ""} transition-all duration-200`} />
                            </div>

                            <div className={`grid gap-[18px] mt-[10px] mb-[30px] ${shipping ? "block" : "hidden"}`}>
                                <textarea className="p-[10px] outline-none border-[1px] border-[#ccc] w-full rounded-[4px] focus:border-[#4c8bf5] transition-all duration-200" value={address || ""} onChange={(e) => setAddress(e.target.value)} placeholder="Address"></textarea>
                                <div className="flex gap-[20px] justify-between">
                                    <input type="text" placeholder="Postal Code" className="p-[10px] outline-none border-[1px] border-[#ccc] w-full rounded-[4px] focus:border-[#4c8bf5] transition-all duration-200" />
                                    <input type="text" placeholder="Locality" className="p-[10px] outline-none border-[1px] border-[#ccc] w-full rounded-[4px] focus:border-[#4c8bf5] transition-all duration-200" />
                                </div>

                                <select className="p-[12px] border-[1px] border-[#ccc] w-full rounded-[8px] outline-none focus:border-[#4c8bf5] transition-all duration-200">
                                    <option value="" disabled selected>Select your City</option>
                                    {city.map((item, index) => (
                                        <option key={index} value={item.name}>{item.name}</option>
                                    ))}
                                </select>

                                <div className="flex items-center gap-[10px]">
                                    <input type="checkbox" onChange={(e) => {
                                        if (e.target.checked) {
                                            localStorage.setItem('address', (address || "address"));

                                            alert("successfully saved address")
                                        }
                                    }} className="outline-none focus:border-[#4c8bf5] transition-all duration-200" />
                                    <h1 className="text-[gray]">Save this address to my profile</h1>
                                </div>
                            </div>
                        </div>

                        {/* Payment */}
                        <div>
                            <div onClick={() => { setPayment(!payment) }} className="flex justify-between items-center border-t-[1px] border-t-[#ccc] ">
                                <h1 className="py-[20px] text-[21px]">Payment</h1>
                                <IoIosArrowUp className={`${payment ? "rotate-180" : ""} transition-all duration-200`} />
                            </div>

                            <div className={`mb-[40px] mt-[10px] ${payment ? "block" : "hidden"}`}>
                                <input type="text" placeholder="Card No" className="focus:border-[#4c8bf5] transition-all duration-200 outline-none p-[10px] mb-[20px] border-[1px] border-[#ccc] w-full rounded-[4px]" />
                                <p className="text-[12px] text-[gray] mb-[15px]">Enter your Card No to enable payment with UPI, Net Banking or local card methods</p>
                                <div className="flex items-center gap-[10px] text-[12px] text-[#ccc]">
                                    <input type="checkbox" />
                                    <h1>Save No to Nike Profile</h1>
                                </div>
                            </div>
                        </div>

                        {/* Delivery */}
                        <div>
                            <div onClick={() => { setDelivery(!delivery) }} className="flex justify-between items-center border-t-[1px] border-t-[#ccc] ">
                                <h1 className="py-[20px] text-[21px]">Delivery</h1>
                                <IoIosArrowUp className={`${delivery ? "rotate-180" : ""} transition-all duration-200`} />
                            </div>

                            <div className={`${delivery ? "block" : "hidden"}`}>
                                <div className={`hover:border-[#4c8bf5] transition-all duration-200 flex gap-[20px] p-[20px] rounded-[5px] my-[30px] border-[1px]`}>
                                    <Image src={"/images/nikeOne/deliver.svg"} alt="Frames" width={24} height={24} ></Image>
                                    <h1>Deliver It</h1>
                                </div>
                                <div className="flex items-center gap-[10px] text-[12px] text-[gray] mb-[20px]">
                                    <input type="checkbox" />
                                    <h1>I have read and consent to ShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</h1>
                                </div>
                                <button className="w-full hover:bg-[#4c8bf5] hover:text-[white] rounded-[30px] bg-[#F5F5F5] text-[gray] py-[10px] px-[20px] mt-[30px] mb-[20px]">Continue</button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Summery */}
                <div className="lg:w-[40%] lg:ml-[30px] mt-[50px] lg:mt-[0px]">
                    <h1 className="text-[21px] font-[500] mb-[20px]">Order Summary</h1>
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
                    <p className="text-[9px] mt-[10px] mb-[40px]">(The total reflects the price of your order, including all duties and taxes)</p>
                    {cart.length > 0 ? (
                        <div>
                            {cart.map((item, index) => (
                                <div key={index} className="flex flex-col gap-[30px] sm:flex-row pb-[20px]">
                                    <img src={item.image} alt="boy" width={60} height={20} className="w-full sm:w-[150px] sm:h-[150px]"></img>
                                    <div className="flex flex-col">
                                        <h1 className="font-[700]">{item.productName}</h1>
                                        <h1>{item.category}</h1>
                                        <p className="text-[13px] text-[gray]">Qty 1</p>
                                        <p className="text-[13px] text-[gray]">{item.colors}</p>
                                        <p className="text-[13px] text-[gray]">₹ {item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}
                </div>

            </div>
        </div >
    )
}

export default Page