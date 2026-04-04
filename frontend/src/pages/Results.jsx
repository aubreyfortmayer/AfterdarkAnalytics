import MusicPlayer from "../components/MusicPlayer";
import Heart from "../assets/heartMusicButton.png";
import Star from "../assets/starMusicButton.png";
import Title from "../assets/ResultsTitle.png";
import SpinTheBottle from "../components/SpinTheBottle"
import Martini from "../components/Martini"
import MartiniStickers from "../assets/MartiniSticker.png"
import CuteKissMark from "../assets/100CuteKiss.png"
import ResultsBox from "../components/ResultsBox"

export default function Results() {
    return (
        //stack vertical (flex)
        // center everything horizontally (items-center), 
        // text center (text-center), 
        //minimum height, need extra height so 140 (min-h-[140vh])
        //w-full, full width of container used
        //max width = 900 px (max-w-[900px])
        <div className="w-full min-h-screen bg-[#fcddec] flex flex-col items-center px-4 py-6">
            
            
            <div className = "flex items-center gap-2">     


                <div className = "relative flex-justify-center">
                    <img 
                    src = {Title}
                    //mt-10, moving the title down from the top of the page
                    className = "w-[clamp(180px, 30vw, 300px)]"
                    />

    

                </div>
        
            </div>


            {/*layout box, mt-20 moving it from elemennt ABOVE it, so the title page
                relative, items inside the box will position themselves based on
                this box, NOT the page
            */}
            <div className = "flex justify-center mt-[clamp(20px, 6vw, 80px)]">
                {/*centered horizontally + moved 35 px to right*/}
                <div className="flex items-start gap-2 max-w-[500px] w-full justify-center">
                    <SpinTheBottle/>

                </div>


                
                    <img 
                    src = {CuteKissMark}
                    className="w-[clamp(40px, 6vw, 80px)] rotate-[12deg] translate-y-[10%" />
                
            

            </div>
                   

                
            <div className= "w-full max-w-[900px] flex flex-col md:flex-row items-center justify-center gap-[clamp(20px, 6vw, 80px)] mt-[clamp(20px, 6vw, 80px)]">
                
                {/*left*/}
                <div className = "flex flex-col items-center gap-6">
                    
                    <div className = "flex gap-3">
                        <img src= {Heart} 
                        className = "w-[clamp(20px, 6vw, 60px)]" />


                        <img src = {Star} 
                        className="w-[clamp(20px, 6vw, 60px)]" />

                    </div>


                <div className="flex flex-col items-center gap-2">
                    <img
                        src={MartiniStickers}
                        className="w-[clamp(100px, 20vw, 180px)]"
                    />

                    <Martini probability={100}/>

                </div>
            </div>

                {/* right */}
                <div className = "flex justify-center">
                    <ResultsBox probability={100}/>

                </div>


            </div>
                

            {/*mt-auto, the music button is pushed down as far as it can be */}
            <div className = "mt-[clamp(30px, 8vw, 120px)]"> 
                {/*music button positioned towards bottom */}
                <MusicPlayer />
            </div>

             </div>

    );
    
}