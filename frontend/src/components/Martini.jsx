import MartiniGlass from "../assets/martiniglass.png"
import ProbabilityLiquid from "../assets/ProbabilityLiquid.png"

//default --> prob = 50
export default function Martini({probability}) {
    return(

    //container, will hold everything else (relative)
    //mx-auto (again, for my sake) positions everything horizontally centered in container
    <div className="relative w-70 mx-auto">

        <div  //liquid positioned based on the martini glass, z-20 for the liquid so it will be on top of the glass (z-10)
            className = "absolute bottom-[53%] left-[6%] w-[100%] h-[50%] overflow-hidden z-20 scale-[0.85]" 
                style = {{
                    //trying to format the image in the martini
                    clipPath: "polygon(0% 0%, 100% 21%, 80% 52%, 36% 95%)"
                }}
        >
            
                <div 
                className= "absolute bottom-0 left-0 w-full transition-all duration-1000 ease-in-out"
                
                    style ={{height: `${probability}%`,
                       
                    }} 
                    >
          
                        <img
                    src = {ProbabilityLiquid}
                    className ="w-full h-full object-cover"
                    />
                    </div>
              

        </div>

        <img
        src={MartiniGlass}
        alt = "Martini"
        //z-10, liquid layered on top of the glass (z-20)
        className = "w-full object-contain"
       
        />
                
    </div>
    );
}