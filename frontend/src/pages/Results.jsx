import MusicPlayer from "../components/MusicPlayer";
import Heart from "../assets/heartMusicButton.png";
import Star from "../assets/starMusicButton.png";
import Title from "../assets/ResultsTitle.png";
import SpinTheBottle from "../components/SpinTheBottle"
import Martini from "../components/Martini"
import MartiniStickers from "../assets/MartiniSticker.png"
import CuteKissMark from "../assets/100CuteKiss.png"
import ResultsShareImage from "../components/ResultsShareImage";
import ResultsBox from "../components/ResultsBox"

export default function Results() {
    return (
        //stack vertical (flex)
        // center everything horizontally (items-center), 
        // text center (text-center), 
        //minimum height, need extra height so 140 (min-h-[140vh])
        //w-full, full width of container used
        //max width = 900 px (max-w-[900px])
        <div className="relative w-full min-h-[1100px] bg-[#fcddec] overflow-visible">
            
            <img 
            src = {Title}
            //mt-10, moving the title down from the top of the page
            className = "absolute top-8 left-1/2 -translate-x-1/2 w-[360px]"
            />

            <img 
                src = {CuteKissMark}
                alt = "100% Cute!"
                className = "absolute w-[250px] rotate-[10deg] right-8 top-20"
            />


            {/*layout box, mt-20 moving it from elemennt ABOVE it, so the title page
                relative, items inside the box will position themselves based on
                this box, NOT the page
            */}
            <div className = "absolute top-[180px] left-1/2 -translate-x-1/2">
                {/*centered horizontally + moved 35 px to right*/}
                          <SpinTheBottle/>

                    </div>
                   

                {/*absolute, placed within the relative container*/}
                <div className = "absolute left-20 top-[360px] scale-[1.25]">
                
                <img
                src = {MartiniStickers}
                className = " w-[195px] mb-2"
                />
                
                
                 <Martini probability={100}/>

                </div>
                
                <div className= "absolute right-[120px] top-[380px]">
                    <ResultsBox probability = {100}/>
                    </div>
               
     

            {/*mt-auto, the music button is pushed down as far as it can be */}
            <div className = "absolute left-[38%] top-[870px] flex items-center gap-4"> 
                {/*music button positioned towards bottom */}
                <MusicPlayer />
                </div>
        
                
                
                
            {/* heart sticker, top-8.5, move to the top, right - used exact pixel values*/}
            <img 
            src = {Heart}
            className = "absolute top-[470px] left-[48%] w-[80px]" 
            />
            
            {/*star sticker, -left makes the pixel value negative*/}
            <img 
            src = {Star}
            className = "absolute top-[560px] left-[30%] w-[70px]"
            />

          
            <ResultsShareImage />
     
            
        </div>

    );
}