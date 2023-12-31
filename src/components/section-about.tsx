import GridContainer from "./grid-container"
import TestimonialsContainer from "./testimonials-container"
import TitleRounded from "./title-rounded"
import pfGuy from "/public/pf-guy.svg"
import pfDarlene from "/public/pf-darlene.svg"
import girl from "/public/girl.svg"
import office from "/public/office-window.svg"
import Image from "next/image"

const SectionAbout = () => {
    return (
        <section className="w-full py-20 bg-light-primary-color h-height-603">
            <GridContainer className="flex justify-around">
                <div className="flex flex-col gap-[40px] w-[631px]">
                    <TitleRounded classNameContainer="bg-primary-color w-[180px]" classNameText="font-medium text-fourteen" text="Top Leading Company"></TitleRounded>
                    <h2 className="font-semibold text-[33px] leading-[40px]">Fresh Ideas for your business design, Top digital marketing service company</h2>
                    <p className="text-[1rem] font-light w-[637px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <div className="flex gap-[65px]">
                        <TestimonialsContainer className="w-[282px]" profile={pfGuy} name="Guy Hawkins" testimonials="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation."></TestimonialsContainer>
                        <TestimonialsContainer className="w-[282px]" profile={pfDarlene} name="Darlene Robertson" testimonials="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation."></TestimonialsContainer>
                    </div>
                </div>
                <div>
                <div className="relative flex">
                        <Image src={office} alt="Man and Woman"
                            width={350}
                            height={428}
                        />
                        <Image className="absolute bottom-[-48px] right-[-99px] rounded-xl" src={girl} alt="Graph"
                            width={160}
                            height={207}
                        />
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}

export default SectionAbout