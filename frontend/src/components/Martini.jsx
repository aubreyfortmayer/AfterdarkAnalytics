import MartiniGlass from "../assets/martiniglass.png"
import ProbabilityLiquid from "../assets/ProbabilityLiquid.png"

export default function Martini({probability = 50}) {
    return(
    <div className="relative w-[250px] h-[350px] overflow-hidden">

        <div 
            
            className = "absolute bottom-[220px] left-[10px] w-[140px] overflow-hidden transition-all duration-[1500ms] z-20"
            style = {{height: `${probability * 1.2}px`}}
        >
            <img 
                src = {ProbabilityLiquid}
                className ="absolute bottom-0 left-5 w-full"
                />
                </div>

        <img
        src={MartiniGlass}
        alt = "Martini"
        className = "absolute top-0 left-0 w-full z-10"
        />
                {/* liquid container */}
    </div>
    );
}