type Button = {
    value: string
    className?: string
}
const Button = ({ value,className }:Button) => {
    return (
        <div>
            <button className={`${className} px-[22px] py-[8px] bg-black text-[white] hover:text-[black] hover:bg-white hover:border-[1px] hover:border-black rounded-[30px]`}>{value}</button>
        </div>
    )
}

export default Button