import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Card from "../BestOfAirMax/Card";

const GearUp = () => {
    return (
        <div className="mt-[60px]">
            <h1 className="text-[23px] font-[500] mb-[20px]">Gear Up</h1>
            <div className="flex flex-col lg:flex-row gap-[40px] items-center">
                <div className="grid gap-[20px]">
                    <div className="flex gap-[12px] items-center justify-end">
                        <p className="text-[15px] font-[500]">Shop Men&apos;s</p>
                        <IoIosArrowDropleftCircle className="size-[40px] hover:text-[gray] text-[#ccc]" />
                        <IoIosArrowDroprightCircle className="size-[40px] hover:text-[gray] text-[#ccc]" />
                    </div>
                    <div className="grid gap-[15px] md:grid-cols-2">
                        <Card picture="three" heading="Nike Dri-FIT ADV TechKnit Ultra" price="₹ 3 895" subHeding="Men's Short-Sleeve" optionalHeading="Running Top" />
                        <Card picture="four" heading="Nike Dri-FIT Challenger" price="₹ 2 495" subHeding="Men's 18cm (approx.) 2-" optionalHeading="in-1 Versatile Shorts" />
                    </div>
                </div>
                <div className="grid gap-[20px]">
                    <div className="flex gap-[12px] items-center justify-end">
                        <p className="text-[15px] font-[500]">Shop Women&apos;s</p>
                        <IoIosArrowDropleftCircle className="size-[40px] hover:text-[gray] text-[#ccc]" />
                        <IoIosArrowDroprightCircle className="size-[40px] hover:text-[gray] text-[#ccc]" />
                    </div>
                    <div className="grid gap-[15px] md:grid-cols-2">
                        <Card picture="five" heading="Nike Dri-FIT ADV Run Division" price="₹ 5 295" subHeding="Women's Long-Sleeve" optionalHeading="Running Top" />
                        <Card picture="six" heading="Nike Fast" price="₹ 3 795" subHeding="Women's Mid-Rise 7/8 Running" optionalHeading="Leggings with Pockets" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GearUp