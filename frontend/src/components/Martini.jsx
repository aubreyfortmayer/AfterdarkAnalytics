import MartiniGlass from "../assets/martiniglass.png"
import ProbabilityLiquid from "../assets/ProbabilityLiquid.png"

//default --> prob = 50
export default function Martini({probability = 50}) {
    return(

    //container, will hold everything else (relative)
    //overflow-hidden, we don't want the prob liquid to overflow out of the container
    <div className="relative w-70 mx-auto">

        <div 
            
            //liquid positioned based on the martini glass, z-20 for the liquid so it will be on top of the glass (z-10)
            className = "absolute bottom-[60%] left-[22%] w-[62%] overflow-hidden transition-all duration-[2789ms] z-20"
            
            //controls the liquid animation moving based on the probability, scaling by 1.2 so liquid fits in glass
            style = {{height: `${(probability/100) * 120}px`}}
        >
        
        <img 
                src = {ProbabilityLiquid}
                className ="absolute bottom-0 left-0 w-full h-full object-cover"
                />
                </div>

        <img
        src={MartiniGlass}
        alt = "Martini"
        //z-10, liquid layered on top of the glass (z-20)
        className = "w-full object-contain z-10"
       
        />
                
    </div>
    );
}