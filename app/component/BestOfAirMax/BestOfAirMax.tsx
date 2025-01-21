import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Card from "./Card";

const BestOfAirMax = () => {
    return (
        <div className="mt-[60px]">
            <div className="flex items-center justify-between mb-[10px]">
                <h1 className="text-[22px] font-[500]">Best of Air Max</h1>
                <div className="flex gap-[12px] items-center">
                    <p className="text-[15px] font-[500]">Shop</p>
                    <IoIosArrowDropleftCircle className="size-[40px] hover:text-[gray] text-[#ccc]" />
                    <IoIosArrowDroprightCircle className="size-[40px] hover:text-[gray] text-[#ccc]" />
                </div>
            </div>
            <div className="grid gap-[20px] sm:grid-cols-3">
                <Card picture="one" heading="Nike Air Max Pulse" price="₹ 13 995" subHeding="Women's Shoes" />
                <Card picture="one" heading="Nike Air Max Pulse" price="₹ 13 995" subHeding="Women's Shoes" />
                <Card picture="two" heading="Nike Air Max 97 SE" price="₹ 16 995" subHeding="Men's Shoes" />
            </div>
        </div>
    )
}

export default BestOfAirMax