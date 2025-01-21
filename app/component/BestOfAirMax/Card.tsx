import Image from "next/image"

type Card = {
    picture: string,
    heading: string,
    price: string,
    subHeding: string,
    optionalHeading?: string,
}

const Card = ({picture, heading, price, subHeding, optionalHeading}:Card) => {
    return (
        <div>
            <Image src={`/images/nikeOne/bestOfAirMax/${picture}.svg`} alt={picture} width={100} height={100} className="w-full"></Image>
            <div className="text-[15px] font-[500] flex items-center justify-between mt-[10px]">
                <h1>{heading}</h1>
                <h1>{price}</h1>
            </div>
            <p className="text-[15px] text-[#ccc]">{subHeding}</p>
            <p className="text-[15px] text-[#ccc]">{optionalHeading}</p>
        </div>
    )
}

export default Card