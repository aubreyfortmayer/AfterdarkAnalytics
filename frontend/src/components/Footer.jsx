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
                className="w-full h-[clamp(70px,8vw,135px)]"
            />
            {/*Overlay div for footer*/}
             <div className="absolute inset-0 flex justify-between items-center">
              
                {/*AfterDark Logo*/}
                <Link to="/">
                    <img src={Logo} alt="AfterDark Logo" className="h-[clamp(60px,8vw,125px)] cursor-pointer" />
                </Link>
            {/*TO DO: change to link sharing feature*/}
                {/*Share Button*/}
                <button
                onClick={()=> {navigator.clipboard.writeText(window.location.href);
                    alert("Link copied!"); 
                }}

                className="cursor-pointer"
                >
                    <img src={ShareButton} alt="Share" className="mt-[clamp(5px,1vw,20px)] h-[clamp(40px,6vw,200px)] cursor-pointer" />
                </button>
            </div>
        </footer>
    );
}