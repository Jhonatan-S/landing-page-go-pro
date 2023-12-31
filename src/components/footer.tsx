import GridContainer from "./grid-container"
import Image from "next/image"
import Logo from "/public/logo.svg"
import arrowRight from "/public/small-arrow-right.svg"
import Link from "next/link"

const aboutus = [
    "Mission & vission",
    "Our company",
    "Our projects",
    "Our team"
]
const discover = [
    "Projects & Research",
    "Clents Review",
    "our projects",
    "Our Team"
]

const usefulLinks = [
    "Contact us",
    "Terms & Conditions",
    "Review"
]
const Footer = () => {
    return (
        <footer className="w-full">
            <GridContainer className="py-[125px] flex gap-[30px] justify-between">

                <div className="flex flex-col gap-[22px] w-[255px]">
                    <Image src={Logo} alt="Logo Go Pro" />
                    <p className="font-semibold text-[18px]">Eleanor Pena</p>
                    <p className="text-fourteen font-light text-justify">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                </div>
                <div className="flex flex-col gap-[16px]">
                    <p className="text-[18px] font-semibold ">ABOUT US</p>
                    {aboutus.map((item, index) => <div key={index}  className="flex gap-[9px]">
                        <Image src={arrowRight} alt="Arrow Right" />
                        <Link href={"#"} className="font-semibold text-[15px] text-grey-custom capitalize hover:text-green-custom">{item}</Link>
                    </div>)}
                </div>
                <div className="flex flex-col gap-[16px]">
                    <p className="text-[18px] font-semibold ">ABOUT US</p>
                    {discover.map((item, index) => <div key={index} className="flex gap-[9px]">
                        <Image src={arrowRight} alt="Arrow Right" />
                        <Link   href={"#"} className="font-semibold text-[15px] text-grey-custom capitalize hover:text-green-custom">{item}</Link>
                    </div>)}
                </div>
                <div className="flex flex-col gap-[16px]">
                    <p className="text-[18px] font-semibold ">ABOUT US</p>
                    {usefulLinks.map((item, index) => <div key={index} className="flex gap-[9px]">
                        <Image src={arrowRight} alt="Arrow Right" />
                        <Link href={"#"} className="font-semibold text-[15px] text-grey-custom capitalize hover:text-green-custom">{item}</Link>
                    </div>)}
                    <button></button>
                </div>
               


            </GridContainer>
        </footer>
    )
}

export default Footer