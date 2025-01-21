import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <div className="min-[425px]:w-[380px] m-auto">
      <div className="p-[20px] grid gap-[20px]">
        <Image src={"/images/nikeOne/Vector.svg"} alt="Frames" width={60} height={20} className="m-auto" ></Image>
        <h1 className="text-center w-[186px] text-[18px] font-bold m-auto">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
        <input type="email" placeholder="Email address" className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] outline-none" />
        <input type="password" placeholder="Password" className="p-[10px] w-full rounded-[4px] border-[1px] border-[#ccc] outline-none" />
        <div className="flex items-center justify-between text-[12px] text-[gray]">
          <div className="flex gap-[10px]">
            <input type="checkbox" />
            <p>Keep me signed in</p>
          </div>
          <p>Forgotten your password?</p>
        </div>
        <p className="text-[12px] text-[gray] text-center w-[279px] m-auto">By logging in, you agree to Nike&apos;s <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Use.</span></p>
        <button className="w-full text-center py-[10px] px-[15px] bg-[black] text-[white] rounded-[4px]">SIGN IN</button>
        <p className="text-[12px] text-[gray] text-center">Not a Member? <span className="text-[black]"><Link href={"/joinUs"}>Join Us.</Link></span></p>
      </div>
    </div>
  )
}

export default page