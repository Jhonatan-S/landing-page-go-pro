import GridContainer from "@/components/grid-container";
import Image from "next/image";
import arrowRightWhite from "/public/arrow-right-white.svg";
import arrowRightBlack from "/public/arrow-right.svg";
import menWorking from "/public/men-Working.svg";
import TitleRounded from "./title-rounded";

const SectionHero = () => {
    return (
        <section className="w-full py-20 bg-primary-color h-height-532">
            <GridContainer className="flex justify-between relative">
                <div className="flex flex-col w-[636px] gap-[34px] ">
                    <TitleRounded classNameContainer="w-[201px] bg-green-custom" text="Digital Marketing Agency" classNameText="text-white font-medium text-fourteen" ></TitleRounded>
                    <div className="flex flex-col w-[636px] gap-[34px] ">
                        <h1 className="font-semibold text-[53px] leading-[65px]">Advanced analytics to grow your business</h1>
                        <p className="text-light-grey-custom" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className="flex gap-[71px]">
                        <button className="w-[157px] h-[58px] flex items-center justify-center py-[20px] px-[32] bg-black rounded-lg gap-1 btn-get-starter">
                            <span className="text-white">Get Started</span>
                            <Image src={arrowRightWhite} alt="Arrow Right" color="white" />
                        </button>

                        <button className="w-[157px]  h-[58px]  flex items-center justify-center py-[20px] px-[32]  rounded-lg gap-1 border border-green-custom">
                            <span className="text-black font-semibold">How it works</span>
                            <Image src={arrowRightBlack} alt="Arrow Right" color="white" />
                        </button>
                    </div>
                </div>
                <div className="z-10">
                    <Image src={menWorking} alt="Men Working" width={339} height={398} />
                </div>
                <div className="w-[315px] h-[394px] absolute right-[60px] top-[25px] border-2 border-green-custom rounded-[37px]">

                </div>
            </GridContainer>
        </section>
    )
}

export default SectionHero