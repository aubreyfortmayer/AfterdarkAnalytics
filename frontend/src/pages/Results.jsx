import { useLocation } from "react-router-dom";
import MusicPlayer from "../components/MusicPlayer";
import Title from "../assets/ResultsTitle.png";
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
        //flex flex-col: stacks vertically, items-center: centers horizontally, px-4: padding left or right, py: padding top or bottom
        <div className="relative w-full min-h-screen bg-[#fcddec] flex flex-col items-center px-4 py-6">
            
            {/* title! flex: horizonal, items-center but vertical*/}
            <div className = "flex items-center gap-2">     


                <div className = "relative flex justify-center">
                    <img 
                    src = {Title}
                    //clamp determines min and max size! helps w going from smaller screens to larger screens 
                    //min: 180
                    //max: 300 
                    className = "w-100 md:w-100 lg:w-150"
                    />

    

                </div>
        
            </div>


            {/*centered horizontally 
            mt-[clamp] smallest it can be - 20px
            largest = - 80px */}
            <div className = "flex justify-center mt-[clamp(20px, 6vw, 80px)] items-center gap-2">
                {/*horizontal, max width of 500px, w-full fills all the available space, justify-center: center inside the container  */}
                <SpinTheBottle/>
                <div className="flex items-start">
                    <img
                    src = {CuteKissMark}
                    className="w-[clamp(8px, 1.5vw, 16px)] h-auto rotate-[10deg] translate-y-[30px] scale-75" 
                    />
                </div>
            </div>
                   

             {/*md: flex-col, we want to stack everything vertically
             max width of 900 px, gap is attempting to fix the space bt the items... need to fix, mt: adding space bt each component
             
             */}   
            <div className= "w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-center gap-[clamp(20px, 6vw, 80px)] mt-[clamp(20px, 6vw, 80px)]">
                
                {/*left*/}
                <div className = "flex flex-col items-center gap-4">
                    <div className= "flex flex-col items-center gap-2">
                        {/* <div className="flex gap-2">
                            <img src= {Heart} 
                            // className = "w-[40px]" />

                            // <img src = {Star} 
                            // className="w-[20px] h-auto border-4 border-red-500" />  
                        </div> */}

                    </div>
                


                {/*items vertically stacked but everything centered horizontally, gap bt items */}
                <div className="flex flex-col items-center gap-2">
 
                    
                    
                    <img
                        src={MartiniStickers}
                        className="w-[clamp(80px, 8vw, 120px)]"
                    />

                    <Martini probability={probability}/>
       
                  

                </div>
            </div>

                {/* right */}

                {/*centered horizontally*/}
                <div className = "flex flex-col items-center gap-6">
                    <ResultsBox probability={probability}/>

                </div>


            </div>
                

            {/*mt-space above music player, space depending on clamp + screen size */}
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