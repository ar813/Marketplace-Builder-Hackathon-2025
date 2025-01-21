import Image from "next/image"

type Card = {
    picture: string,
    highlight: string,
    heading: string,
    subHeding: string,
    price: string,
}

const Card = ({picture, highlight, heading, subHeding, price}:Card) => {
    return (
        <div className="grid gap-[8px] text-[15px] font-[500]">
            <Image src={`/images/nikeOne/allProducts/${picture}.svg`} alt="Frames" width={60} height={20} className="w-full" ></Image>
            <h1 className="text-[#9E3500] mt-[15px]">{highlight}</h1>
            <h1 className="text-[black]">{heading}</h1>
            <h1 className="text-[gray] font-[400]">{subHeding}</h1>
            <h1 className="text-[gray] font-[400]">1 Colour</h1>
            <h1 className="text-[black] mt-[10px]">{price}</h1>
        </div>
    )
}

export default Card