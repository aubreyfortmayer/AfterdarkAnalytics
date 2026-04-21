import { useLocation } from "react-router-dom";
import MusicPlayer from "../components/MusicPlayer";
import ResultsTitle from "../assets/TitleResults.png";
import SpinTheBottle from "../components/SpinTheBottle"
import Martini from "../components/Martini"
import MartiniStickers from "../assets/MartiniSticker.png"
import CuteKissMark from "../assets/100Cute.png"
import ResultsShareImage from "../components/ResultsShareImage";
import ResultsBox from "../components/ResultsBox"

export default function Results() {
    // added this for backend support
    const location = useLocation();
    const data = location.state;

    // safety check (prevents crash if page is refreshed)
    if (!data) {
        return (
            <div className="flex items-center justify-center h-screen bg-[#fcddec] text-black">
                Missing results. Please go back and try again.
            </div>
        );
    }

    const { will_go_out, prediction, probability } = data;

    return (
        // visualization purposes (for my sake): flex flex-col: stacks vertically, items-center: centers horizontally, px-4: padding left or right, py: padding top or bottom
        <div className="relative w-full min-h-screen bg-[#fcddec] flex flex-col items-center px-4 py-6">
        
                <div className = "flex flex-col items-center text-center">
                    <img 
                    src = {ResultsTitle}
                    //clamping wasn't working here, small and medium screens
                    className = "mx-auto w-[800px] md:w-[750px]"
                    />

                    <div className= "mt-20 flex justify-center">
                        <div className= "scale-[0.85] md: scale-[0.8] translate-x-[10%]">                    
                        <SpinTheBottle/>                     
                    </div>
                </div>
 
                </div>
        
            {/* </div> */}
                   
             {/*md: flex-col, we want to stack everything vertically, mt: adding space bt each component*/}   
            <div className= "w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-center gap-[clamp(20px, 6vw, 80px)] mt-[clamp(20px, 6vw, 80px)]">
                
                {/*left*/}
                <div className = "flex flex-col items-center gap-4">
                    <div className= "flex flex-col items-center gap-2">
 

                    </div>
                
                 <Martini probability= {probability}/>


                {/*items vertically stacked but everything centered horizontally, gap bt items */}
                <div className="flex flex-col items-center gap-2">
 
                    
                    
                    <img
                        src={MartiniStickers}
                        className="w-[clamp(80px, 8vw, 120px)]"
                    />

                    <Martini probability={probabilityPercentage}/>
       
       

                </div>
            </div>

                {/* right */}

                {/*centered horizontally*/}
                <div className = "flex flex-col items-center gap-6">
                    <ResultsBox probability={probabilityPercentage}/>

                </div>


            </div>
                

            {/* space depending on clamp + screen size */}
            <div className = "mt-[clamp(30px, 8vw, 120px)]"> 
                {/*music button positioned towards bottom */}
                <MusicPlayer />
            </div>


            <div className = "flex justify-center mt-[clamp(20px, 6vw, 60px)]">
                <ResultsShareImage />
                </div> 

   
             </div>
    );
    
}