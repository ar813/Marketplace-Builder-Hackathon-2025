import Image from "next/image"
import Button from "../Button/Button"

const Hero = () => {
    return (
        <div className="grid gap-[40px]">
            <Image src={"/images/nikeOne/hero.svg"} alt="hero" width={100} height={100} className="w-full"></Image>
            <div className="flex gap-[20px] flex-col justify-center items-center">
                <h1 className="text-[15px] font-[500]">First Look</h1>
                <h1 className="md:text-[56px] text-[25px] font-[600]">NIKE AIR MAX PULSE</h1>
                <p  className="text-[15px] text-center">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
                —designed to push you past your limits and help you go to the max.</p>
                <div className="flex items-center gap-[20px]">
                    <Button value="Notify Me" />
                    <Button value="Shop Air Max" />
                </div>
            </div>
        </div>
    )
}

export default Hero