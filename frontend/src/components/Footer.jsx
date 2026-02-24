import FooterBackground from "../assets/FooterBackground.png";
//actually import this

export default function Footer() {
    return (
        <footer className = "mt-auto">
            {/*Sparkly pink glitter image*/}
            <img
            src = {FooterBackground}
            alt = "Footer background" 
            className = "w-full h-32 object cover"
        />
        </footer>
    );
}