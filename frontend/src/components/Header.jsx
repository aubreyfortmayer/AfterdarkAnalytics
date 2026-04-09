import HeaderBackground from "../assets/HeaderBackground.png";
import AboutImage from "../assets/ABOUT.png";
import StartImage from "../assets/START.png";
import Logo from "../assets/StarLogo.png";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        //TO DO: If I want to make the header sticky add this: sticky top-0 z-50 instead of relative
        <header className="relative w-full">
            {/*Header background pink glitter image*/}
            <img 
                src={HeaderBackground}
                alt=""
                className="w-full h-[clamp(70px,8vw,135px)]"
            />
            {/*Overlay div for header*/}
            <div className="absolute inset-0 flex justify-between items-center">
                {/*AfterDark Logo*/}
                <Link to="/">
                    <img src={Logo} alt="AfterDark Logo" className="h-[clamp(60px,8vw,125px)] cursor-pointer" />
                </Link>

                {/*Div for right-aligned navigation buttons*/}
                <div className="flex justify-end gap-10 pr-[clamp(8px,2vw,20px)]">
                <Link to="/#intro">
                    <img src={AboutImage} alt="About" className="h-[clamp(20px,3vw,50px)] cursor-pointer" />
                </Link>

                <Link to="/#questions">
                    <img src={StartImage} alt="Start" className="h-[clamp(20px,3vw,50px)] cursor-pointer" />
                </Link>
                </div>
            </div>
        </header>
    );
}