import Image from "next/image"
import { twMerge } from "tailwind-merge";




const TestimonialsContainer = ({ profile, name, testimonials, className }: { profile: string, name: string, testimonials: string, className?: string }) => {

    const defaultClass = ["flex", "gap-5"]
    const classMerge = twMerge(defaultClass, className)
    return (
        <div className={classMerge}>
            <div className="w-[46px] min-w-[46px]">
                <Image src={profile} alt="Profile Picture" width={46} />
            </div>
            
            <div className="w-[379px]">
                <h2 className="font-semibold text-[18px] ">{name}</h2>
                <p className="text-fourteen text-justify font-light leading-6">{testimonials}</p>
            </div>
        </div>
    );
};

export default TestimonialsContainer