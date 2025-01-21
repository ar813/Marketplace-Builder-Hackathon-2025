import { AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-[60px] bg-black text-white p-[40px]">
            <div className="relative">
                <div className="max-[767px]:flex items-center justify-center">
                    <div className="grid md:grid-cols-3 md:w-[70%] gap-[50px]">
                        <div className="grid gap-[20px] text-[14px] uppercase">
                            <h1>Find A Store</h1>
                            <h1>Become A Member</h1>
                            <h1>Sign Up for Email</h1>
                            <h1>Send Us Feedback</h1>
                            <h1>Student Discounts</h1>
                        </div>
                        <div className="grid gap-[20px] text-[14px] text-[gray]">
                            <h1 className="text-white">Get Help</h1>
                            <p>Order Status</p>
                            <p>Delivery</p>
                            <p>Returns</p>
                            <p>Payment Options</p>
                            <p>Contact Us On Nike.com Inquiries</p>
                            <p>Contact Us On All Other Inquiries</p>
                        </div>
                        <div className="grid gap-[20px] text-[14px] text-[gray]">
                            <h1 className="text-white">About Nike</h1>
                            <p>News</p>
                            <p>Careers</p>
                            <p>Investors</p>
                            <p>Sustainability</p>
                        </div>
                    </div>
                </div>
                <div className="text-[30px] text-[gray] items-center gap-[20px] absolute right-0 top-0 hidden md:flex">
                    <AiFillTwitterCircle />
                    <MdFacebook />
                    <TfiYoutube />
                    <ImInstagram />
                </div>
            </div>
            <div className="mt-[60px] flex justify-between max-[1023px]:justify-center items-center text-[gray]">
                <div className="flex gap-[15px] items-center">
                    <FaLocationDot className="text-[25px] text-[white]" />
                    <h1 className="text-white">India</h1>
                    <h1>© 2023 Nike, Inc. All Rights Reserved</h1>
                </div>
                <div className="gap-[20px] items-center hidden lg:flex">
                    <h1>Guides</h1>
                    <h1>Terms of Sale</h1>
                    <h1>Terms of Use</h1>
                    <h1>Nike Privacy Policy</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer