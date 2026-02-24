import FooterBackground from "../assets/FooterBackground.png";
import ShareButton from "../assets/ShareWebsite.png";
import Logo from "../assets/StarLogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="relative w-full ml-10px">
            {/*Footer background image*/}
            <img 
                src={FooterBackground}
                alt=""
                className="w-full h-[clamp(100px,16vw,270px)]"
            />
            {/*Overlay div for footer*/}
             <div className="absolute inset-0 flex justify-between items-center">
              
                {/*AfterDark Logo*/}
                <Link to="/">
                    <img src={Logo} alt="AfterDark Logo" className="h-[clamp(50px,15vw,250px)] cursor-pointer" />
                </Link>
            {/*TO DO: change to link sharing feature*/}
                {/*Share Button*/}
                <Link to="/">
                    <img src={ShareButton} alt="Share" className="h-[clamp(50px,10vw,200px)] cursor-pointer" />
                </Link>
            </div>
        </footer>
    );
}