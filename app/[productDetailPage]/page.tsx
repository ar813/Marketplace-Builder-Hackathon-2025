"use client"

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Comments from "../component/Comments/Comments";


type PageProps = {
    params: {
        productDetailPage: string;
    };
    searchParams: object
};

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

const Page = (props: PageProps) => {
    const [data, setData] = useState<Product[] | null>(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const products = await getData();
            setData(products);
            setLoading(false);
        }
        fetchData()
    }, [])

    const productTitle = decodeURIComponent(props.params.productDetailPage);
    const result = data?.find((val: Product) => val.productName === productTitle);

    const addToCart = (product: Product) => {
        const cart: Product[] = JSON.parse(localStorage.getItem("productsCart") || "[]");
        cart.push(product);
        localStorage.setItem("productsCart", JSON.stringify(cart));

        alert(`${product.productName} added to cart!`);
    };

    if (loading) {
        return (
            <div className="w-full flex flex-col items-center justify-center px-[20px] sm:px-[0px] h-[400px]">
                <div className="w-[70px] h-[70px] border-t-[10px] border-t-[gray] border-[10px] border-[lightgray] mt-[15px] animate-spin rounded-[50%]"></div>
                <h1 className="text-[20px] mt-[15px]">Loading...</h1>
            </div>
        );
    }

    if (!result) {
        return (
            <div className="w-full flex justify-center items-center h-[200px]">
                <h1>Product not found</h1>
            </div>
        );
    }

    return (
        <div className="p-[30px] lg:pb-[200px] md:p-[80px] gap-[80px] grid lg:grid-cols-2">

            <img src={result.image} alt={result?.productName} width={60} height={20} className="w-full" ></img>
            <div className="flex flex-col gap-[20px] lg:w-[367px] lg:ml-[60px]">
                <h1 className="md:text-[48px] text-[35px] font-[500]">{result?.productName}</h1>
                <p className="text-[15px]">{result?.description}</p>
                <h1 className="md:text-[36px] text-[30px] font-[500]">₹ {result.price}</h1>
                <button onClick={() => addToCart(result)} className={`px-[22px] py-[8px] bg-black text-[white] hover:text-[black] hover:bg-white hover:border-[1px] hover:border-black rounded-[30px] w-[174px]`}> <MdOutlineShoppingCart className="text-[24px] mr-[10px] inline" />Add To Card</button>
            </div>
            
            <Comments />
        </div>
    )
}

export default Page