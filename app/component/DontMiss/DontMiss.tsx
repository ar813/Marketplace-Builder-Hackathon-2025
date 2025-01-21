import Image from "next/image"
import Button from "../Button/Button"

const DontMiss = () => {
  return (
    <div>
         <div className="mt-[60px]">
            <h1 className="text-[23px] font-[500] mb-[20px]">Featured</h1>
            <div className="grid gap-[40px]">
                <Image src={"/images/nikeOne/dontMiss.svg"} alt="hero" width={100} height={100} className="w-full"></Image>
                <div className="flex gap-[20px] flex-col justify-center items-center">
                    <h1 className="md:text-[56px] text-[18px] sm:text-[35px] font-[600] text-center">FLIGHT ESSENTIALS</h1>
                    <p className="text-[15px] text-center">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
                    <Button value="Shop" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DontMiss