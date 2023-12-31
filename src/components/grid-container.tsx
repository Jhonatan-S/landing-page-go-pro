import { twMerge } from "tailwind-merge";

interface GridContainerProps {
    children: React.ReactNode
    className?: string;
}

const GridContainer = ({children, className}: GridContainerProps) => {
    const defaultClass = "max-w-grid mx-auto"
    const classMerge = twMerge(defaultClass, className)
    return (
        <div className={classMerge}>
            {children}
        </div>
    )
}

export default GridContainer