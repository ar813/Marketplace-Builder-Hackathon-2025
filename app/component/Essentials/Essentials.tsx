import Image from "next/image"

const Essentials = () => {
    return (
        <div className="mt-[60px]">
            <h1 className="text-[23px] font-[500] mb-[20px]">The Essentials</h1>
            <div className="grid gap-[10px] sm:grid-cols-3">
                <Image src={"/images/nikeOne/Essentials/one.svg"} alt="Frames" width={100} height={100} className="w-full"></Image>
                <Image src={"/images/nikeOne/Essentials/two.svg"} alt="Frames" width={100} height={100} className="w-full"></Image>
                <Image src={"/images/nikeOne/Essentials/three.svg"} alt="Frames" width={100} height={100} className="w-full"></Image>
            </div>
        </div>
    )
}

export default Essentials