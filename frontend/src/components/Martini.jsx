import MartiniGlass from "../assets/martiniglass.png"
import ProbabilityLiquid from "../assets/ProbabilityLiquid.png"

//probability for the animation, but not fully implemented yet
//default --> prob = 50
export default function Martini({probability}) {
    return(

    //container, will hold everything else (relative)
    //overflow-hidden, we don't want the prob liquid to overflow out of the container
    <div className="relative w-[250px] h-[350px] mx-auto">

        <div 
            
            //liquid positioned based on the martini glass, z-20 for the liquid so it will be on top of the glass (z-10)
            className = "absolute bottom-[220px] left-[32px] w-[134px] overflow-hidden transition-all duration-[2789ms] z-20"
            
            //controls the liquid animation moving based on the probability, scaling by 1.2 so liquid fits in glass
            style = {{height: `${(probability/100) * 104}px`}}
        >
        
        <img 
                src = {ProbabilityLiquid}
                className ="absolute bottom-0 left-0 w-full"
                />
                </div>

        <img
        src={MartiniGlass}
        alt = "Martini"
        //z-10, liquid layered on top of the glass (z-20)
        className = "absolute top-0 left-0 w-full z-10"
        />
                
    </div>
    );
}