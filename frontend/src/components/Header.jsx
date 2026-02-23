import HeaderBackground from "../assets/HeaderBackground.png";
import AboutImage from "../assets/ABOUT.png";
import SignInImage from "../assets/SIGNIN.png";
import Logo from "../assets/StarLogo.png";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full">
            {/*Background pink glitter image with star logo*/}
            <img 
                src={HeaderBackground}
                alt=""
                className="w-full h-[clamp(100px,16vw,270px)]"
            />
            {/*Overlay div for header*/}
            <div className="absolute inset-0 flex justify-between items-center">
                {/*AfterDark Logo*/}
                <Link to="/">
                    <img src={Logo} alt="AfterDark Logo" className="h-[clamp(50px,15vw,250px)] cursor-pointer" />
                </Link>

                {/*Div for right-aligned navigation buttons*/}
                <div className="flex justify-end gap-10 pr-[clamp(16px,4vw,40px)]">
                <a href="/#intro">
                    <img src={AboutImage} alt="About" className="h-[clamp(24px,5vw,48px)] cursor-pointer" />
                </a>

                <Link to="/signin">
                    <img src={SignInImage} alt="Sign In" className="h-[clamp(24px,5vw,48px)] cursor-pointer" />
                </Link>
                </div>
            </div>
        </header>
    );
}