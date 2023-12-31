import TestimonialsContainer from "./testimonials-container";
import GridContainer from "./grid-container";
import Image from "next/image";
import TitleRounded from "./title-rounded";

import manWoman from "/public/man-woman.svg"
import graph from "/public/graph.svg"
import pfGarddy from "/public/pf-garddy.svg"
import pfHerdric from "/public/pf-herdric.svg"
import pfEleanor from "/public/pf-eleanor.svg"
import pfCody from "/public/pf-cody.svg"
import pfLeslie from "/public/pf-leslie.svg"


const SectionTestimonials = () => {
    return (

        <section className="w-full mb-[113px]">
            <GridContainer className="flex flex-col">
                <div className="flex justify-between mb-[103px]">
                    <div className="relative flex">
                        <Image src={manWoman} alt="Man and Woman"
                            width={540}
                            height={542}
                        />
                        <Image className="absolute bottom-[-25px] right-[-99px] rounded-xl" src={graph} alt="Graph"
                            width={190}
                            height={245}
                        />
                    </div>
                    <div className="flex flex-col w-[447px] justify-between">
                        <div>
                        <TitleRounded classNameContainer="w-[201px] bg-primary-color" text="Digital Marketing Agency" classNameText="text-black font-medium text-fourteen" ></TitleRounded>
                        </div>
                        <div className="w-[485px] ">
                            <h2 className="font-semibold text-[33px] text-black">Fresh Ideas for your business design.</h2>
                        </div>
                        <div>
                            <p className="text-[1rem] font-light text-justify">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <TestimonialsContainer profile={pfGarddy} name="Garddy" testimonials="Dicta maiores architecto rerum optio fugit iste tenetur fuga debitis sit quis sunt atque itaque, reiciendis sapiente porro ipsa, laborum quod nulla, inventore numquam recusandae dolores minima omnis voluptas?  " />
                            <TestimonialsContainer profile={pfHerdric} name="Herdric" testimonials="Dicta maiores architecto rerum optio fugit iste tenetur fuga debitis sit quis sunt atque itaque, reiciendis sapiente porro ipsa, laborum quod nulla, inventore numquam recusandae dolores minima omnis voluptas?  " />

                        </div>



                    </div>

                </div>
                <div className=" w-full flex flex-col items-center gap-[15px] mb-[50px]">
                    <h2 className="font-semibold text-[33px] text-black text-center w-[500px]">Fresh Ideas for your business design.</h2>
                    <p className="text-[1rem] font-light text-center w-[637px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className="flex gap-[30px]">
                    <div className="w-[345px]">
                        <TestimonialsContainer profile={pfEleanor} name="Garddy" testimonials="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation." />
                    </div>
                    <div className="w-[345px]">
                        <TestimonialsContainer profile={pfCody} name="Garddy" testimonials="Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue" />
                    </div>
                    <div className="w-[345px]">
                        <TestimonialsContainer profile={pfLeslie} name="Garddy" testimonials="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation." />
                    </div>

                </div>
            </GridContainer>
        </section>
    )
}

export default SectionTestimonials