"use client"

import GridContainer from "@/components/grid-container";
import Image from "next/image"
import brandB from "/public/brand-B.svg"
import brandLoveClip from "/public/brand-loveclip.svg"
import brandSushi from "/public/brand-sushi.svg"
import brandPaint from "/public/brand-paint.svg"
import brandbg from "/public/brand-bg.svg"
import brandTime from "/public/brand-time.svg"
import brandM from "/public/brand-m.svg"


const brandsFistContainer = [
    brandB,
    brandLoveClip,
    brandSushi,
    brandPaint,
]

const brandsSecondContainer = [
    brandbg,
    brandTime,
    brandM
]

const SectionBrands = () => {

    return (
        <section className="w-full py-[101px]">
            <GridContainer className="flex flex-col items-center gap-[76px]">
                <div className="flex gap-[30px]">
                    {brandsFistContainer.map((item) => <div className="container-brands rounded-[12px]">
                        <Image src={item} alt="logo" width={255} height={95} />
                    </div>)}

                </div>
                <div className="flex justify-center gap-[30px]">
                    {brandsSecondContainer.map((item) => <div className="container-brands rounded-[12px]">
                        <Image src={item} alt="logo" width={255} height={95} />
                    </div>)}

                </div>
                <div className="w-[62%] h-[2px] bg-grey-light-custom">

                </div>
            </GridContainer>
        </section>
    )
}

export default SectionBrands