"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import SideBar from "../component/SideBar/SideBar";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
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

async function getData() {
    const fetchData = await client.fetch("*[_type == 'product']{productName, category, price, inventory, colors, status, 'image':image.asset->url, description}");
    return fetchData;
}

const Page = () => {

    const [data, setData] = useState<Product[] | null>(null);
    const [filteredData, setFilteredData] = useState<Product[] | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [loading, setLoading] = useState(true)
    const [sort, setSort] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            const products = await getData();
            setData(products);
            setFilteredData(products);
            setLoading(false);
        }
        fetchData()
    }, []);


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase(); // Get the search term in lowercase
        setSearchTerm(term); // Update the search term state

        if (data) {
            const filtered = data.filter(product =>
                product.productName.toLowerCase().startsWith(term) ||
                product.category.toLowerCase().startsWith(term) ||
                product.colors.some(color => color.toLowerCase().startsWith(term)) // colors is an array
            );
            setFilteredData(filtered);
        }
    };

    // Sorting functionality
    const handleSort = (option: string) => {
        if (filteredData) {
            const sortedData = [...filteredData];
            if (option === "priceLowHigh") {
                sortedData.sort((a, b) => a.price - b.price);
            } else if (option === "priceHighLow") {
                sortedData.sort((a, b) => b.price - a.price);
            } else if (option === "alphabetical") {
                sortedData.sort((a, b) => a.productName.localeCompare(b.productName));
            }
            setFilteredData(sortedData);
        }
        setSort(false); // Close sort dropdown after selection
    };

    const addToCart = (product: Product) => {
        const cart: Product[] = JSON.parse(localStorage.getItem("productsCart") || "[]");
        const isProductInCart = cart.some((item) => item.productName === product.productName);
        if (isProductInCart) {
            alert("This product is already in your cart!");
            return;
        }
        cart.push(product);
        localStorage.setItem("productsCart", JSON.stringify(cart));
        alert("Item is successfully added to your bag!")

    };

    const addToWishList = (product: Product) => {
            const wishList: Product[] = JSON.parse(localStorage.getItem("wishList") || "[]");
            const isProductInWishList = wishList.some((item) => item.productName === product.productName);
            if (isProductInWishList) {
                alert("This product is already in your wishlist!");
                return;
            }
            wishList.push(product);
            localStorage.setItem("wishList", JSON.stringify(wishList));
        alert("Item is successfully added to your favorites!")
    };


    return (
        <div className="md:px-[30px] px-[15px] lg:flex">

            <SideBar />

            <div className="lg:w-[80%]">

                {/* Sort By Dropdown */}
                <div className="flex items-center justify-end mt-[60px] mb-[25px]">
                    <div className="relative">
                        <div onClick={() => setSort(!sort)} className="flex items-center gap-[10px] cursor-pointer">
                            <h1>Sort By</h1>
                            <IoIosArrowDown className={`text-[24px] ${sort ? "rotate-180" : ""} transition-transform duration-300`} />
                        </div>
                        {sort && (
                            <div className="absolute top-[30px] right-0 bg-white border rounded shadow-lg">
                                <div className="p-2 cursor-pointer hover:bg-gray-200 w-[150px]" onClick={() => handleSort("priceLowHigh")}>Price: Low to High</div>
                                <div className="p-2 cursor-pointer hover:bg-gray-200 w-[150px]" onClick={() => handleSort("priceHighLow")}>Price: High to Low</div>
                                <div className="p-2 cursor-pointer hover:bg-gray-200 w-[150px]" onClick={() => handleSort("alphabetical")}>Alphabetical</div>
                            </div>
                        )}
                    </div>
                </div>


                {/* Search Bar */}
                <div className="flex justify-between items-center mt-[30px] mb-[70px]">
                    <input
                        type="text"
                        placeholder="Search products by name, category or colors..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full p-[10px] border-[1px] border-[#ccc] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Products List */}
                {loading ? (
                    <div className="w-full flex flex-col items-center justify-center px-[20px] sm:px-[0px] h-[400px]">
                        <div className="w-[70px] h-[70px] border-t-[10px] border-t-[gray] border-[10px] border-[lightgray] mt-[15px] animate-spin rounded-[50%]"></div>
                        <h1 className="text-[20px] mt-[15px]">Loading...</h1>
                    </div>
                ) : (
                    <div>
                        {filteredData && filteredData.length === 0 ? (
                            <div className="flex items-center justify-center text-[20px] font-[500] h-[200px]">
                                No product found
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-2 gap-[20px] md:grid-cols-3 pb-[80px]">
                                {filteredData?.map((item, index) => (
                                    <div key={index}>
                                        <div className="grid gap-[8px] text-[15px] font-[500] relative">

                                            <div className="grid gap-[15px] text-[29px] absolute right-[14px] top-[20px]">
                                                <div onClick={() => addToWishList(item)} className="rounded-[30px] bg-[white] w-[35px] h-[35px] flex justify-center items-center hover:bg-red-500 hover:text-white hover:shadow-lg transition duration-200 ease-in-out">
                                                    <IoMdHeartEmpty className="text-[20px]" />
                                                </div>
                                                <div onClick={() => { addToCart(item) }} className="rounded-[30px] bg-[white] w-[35px] h-[35px] flex justify-center items-center hover:bg-blue-500 hover:text-white hover:shadow-lg transition duration-200 ease-in-out">
                                                    <IoBagOutline className="text-[19px]" />
                                                </div>
                                            </div>

                                            <Link href={item.productName} key={index}>
                                                <img src={item.image} alt={item.productName} className="w-full" />
                                                <h1 className="text-[#9E3500] mt-[15px]">{item.status}</h1>
                                                <h1 className="text-[black]">{item.productName}</h1>
                                                <h1 className="text-[gray] font-[400]">{item.category}</h1>
                                                <h1 className="text-[gray] font-[400]">{item.colors.join(", ")}</h1>
                                                <h1 className="text-[black] mt-[10px]">MRP : ₹ {(item.price).toFixed(2)}</h1>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page