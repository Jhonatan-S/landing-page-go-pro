import Image from "next/image";
import logo from "/public/logo.svg";
import GridContainer from "@/components/grid-container";
import arrowDown from "/public/arrow-down.svg"
import arrowRight from "/public/arrow-right.svg"

const itemNav = [
    "About",
    "Company",
    "Pages",
    "Blog",
    "Shop",
]

const Header = () => {
    return (
        <header className="w-full mx-auto flex items-center justify-center py-5">
            <GridContainer className="flex items-center justify-between">
                <Image
                    src={logo}
                    alt="Logo"
                    width={143}
                    height={50}
                />
                <nav className="flex">
                    <ul className="flex gap-9">
                        <li className="flex items-center">
                            <a href="#" className="text-fourteen font-semibold  hover:text-green-custom">Home</a>
                        </li>
                        {
                            itemNav.map((item) => <button className="flex items-center">
                                <span className="text-fourteen font-semibold hover:text-green-custom">{item}</span>
                                <Image
                                    className="mt-marginArrowNav"
                                    src={arrowDown}
                                    alt="Arrow Down"
                                    width={18}
                                    height={18}
                                />
                            </button>)

                        }

                    </ul>

                    <div className="mx-marginBtnNav px-5 py-3 rounded-lg bg-primary-color">
                        <button className="flex items-center">
                            <span className="text-fourteen font-semibold">
                                Get Started
                            </span>
                            <Image
                                src={arrowRight}
                                alt="Arrow Right"
                            />
                        </button>
                    </div>
                </nav>
            </GridContainer>
        </header>
    )
}

export default Header