import { IoIosSearch } from "react-icons/io";
import Button from "../component/Button/Button";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

import { ImMobile } from "react-icons/im";
import { RiMessage2Fill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";

const page = () => {
    return (
        <div className="px-[20px] lg:pl-[60px] py-[50px]">
            <h1 className="text-[32px] font-[500] text-center mb-[15px]">GET HELP</h1>
            <div className="w-full sm:w-[457px] sm:m-auto p-[10px] flex items-center justify-between border-[1px] border-[#ccc] rounded-[4px] text-[gray]">
                <input type="text" placeholder="What can we help you with?" className="w-full outline-none pr-[10px]"/>
                <IoIosSearch className="text-[24px] active:text-[black]" />
            </div>
            <div className="flex flex-col lg:flex-row pt-[50px] ">
                <div className="lg:w-[70%] lg:border-r-[1px] border-r-[#ccc] lg:pr-[50px]">
                    <div>
                        <h1 className="text-[28px] font-[500] my-[20px]">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
                        <p className="text-[15px] mb-[20px]">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                        <p className="text-[15px] mb-[20px] pl-[40px]">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                        <p className="text-[15px] mb-[20px] pl-[40px]">If you enter your PAN information at checkout, you&apos;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
                        <p className="text-[15px] mb-[20px]">Apple Pay</p>
                        <p className="text-[16px] font-[500] mb-[20px]"><span className="underline font-[600]">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you&apos;re not already a Member, join us today.</p>
                        <div className="flex gap-[20px] mb-[30px]">
                            <Button value="JOIN US" />
                            <Button value="SHOP NIKE" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-[20px] font-[500] mb-[30px]">FAQs</h1>
                        <h1 className="text-[16px] font-bold mb-[10px]">Does my card need international purchases enabled?</h1>
                        <p className="mb-[20px]">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                        <p className="mb-[20px]">Please note, some banks may charge a small transaction fee for international orders.</p>
                        <h1 className="text-[16px] font-bold mb-[10px]">Can I pay for my order with multiple methods?</h1>
                        <p className="mb-[20px]">No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>
                        <h1 className="text-[16px] font-bold mb-[10px]">What payment method is accepted for SNKRS orders?</h1>
                        <p className="mb-[20px]">You can use any accepted credit card to pay for your SNKRS order.</p>
                        <h1 className="text-[16px] font-bold mb-[10px]">Why don&apos;t I see Apple Pay as an option?</h1>
                        <p className="mb-[20px]">To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
                        <h1 className="text-[15px] mb-[20px]">Was this answer helpful?</h1>
                    </div>
                    <div className="flex gap-[10px] text-[30px] mb-[20px]">
                        <BiSolidLike />
                        <BiSolidDislike />
                    </div>
                    <div>
                        <h1 className="mb-[20px] text-[gray]">RELATED</h1>
                        <h1 className="mb-[20px] underline font-[600] pl-[40px] cursor-pointer">WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</h1>
                        <h1 className="mb-[20px] underline font-[600] pl-[40px] cursor-pointer">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h1>
                    </div>
                </div>
                <div className="lg:w-[30%]">
                    <h1 className="font-[500] text-[28px] text-center mt-[100px] lg:mt-[20px]">CONTACT US</h1>
                    <div>
                        <div className="text-center mt-[30px]">
                            <ImMobile className="text-[64px] m-auto mb-[30px]" />
                            <p>000 800 919 0566</p>
                            <p>Products & Orders: 24 hours a day,</p>
                            <p>7 days a week</p>
                            <p>Company Info & Enquiries: 07:30 -</p>
                            <p>16:30, Monday - Friday</p>
                        </div>
                        <div className="text-center mt-[40px]">
                            <RiMessage2Fill className="text-[64px] m-auto mb-[40px]" />
                            <h1>24 hours a day</h1>
                            <p>7 days a week</p>
                        </div>
                        <div className="text-center mt-[40px]">
                            <TfiEmail className="text-[64px] m-auto mb-[40px]" />
                            <h1>We&apos;ll reply within</h1>
                            <p>five business days</p>
                        </div>
                        <div className="text-center mt-[40px]">
                            <IoLocationSharp className="text-[64px] m-auto mb-[40px]" />
                            <h1>STORE LOCATOR</h1>
                            <p>Find Nike retail stores near you</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page