import { twMerge } from "tailwind-merge"

interface TitleRoundedProps {
    text: string
    classNameContainer: string
    classNameText: string
}


const TitleRounded = ({text, classNameContainer, classNameText}: TitleRoundedProps) => {

    const classDefault = "flex items-center py-[10px] px-[15px] w-[200px] h-[36px] rounded-full bg-primary-color";
    const classMerge = twMerge(classDefault, classNameContainer)
 

    return (
        <div className={classMerge}>
            <p className={classNameText}>{text}</p>
        </div>
    )
}

export default TitleRounded