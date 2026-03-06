import MusicPlayer from "../components/MusicPlayer";
import Heart from "../assets/heartMusicButton.png";
import Star from "../assets/starMusicButton.png";
import Title from "../assets/ResultsTitle.png";
import SpinTheBottle from "../components/SpinTheBottle"
import Martini from "../components/Martini"
import MartiniStickers from "../assets/MartiniSticker.png"

export default function Results() {
    return (
        //stack vertical, center everything horizontally, text center, mt-16 move section down
        <div className="relative flex flex-col items-center text-center min-h-[140vh] w-full max-w-[900px] mx-auto">
            
            <img 
            src = {Title}
            className = "mt-10 w-[370px]"
            />

            <div className = "mt-20 relative w-full max-w-[700px] h-[550px]">
                {/*centered horizontally + moved 35 px to right*/}
                <div className="absolute left-1/2 -translate-x-1/2 top-[0px]">
                     <SpinTheBottle/>
                </div>
                   

                <div className = "absolute left-[-150px] top-[180px]">
                 <Martini probability={40}/>

                </div>
                
                 <img
                src = {MartiniStickers}
                className = "absolute left-[-120px] top-[-10px] w-[185px]"
                />
                
               
             
            </div>

            {/* relative, want to position the stickers around wrapper using the music button's location
            */}
            <div className = "mt-auto mb-16 relative"> 
                {/*music button positioned towards bottom */}
                <MusicPlayer />
                
                
                {/*top-8.5, move to the top, right - used exact pixel values*/}
                <img 
            src = {Heart}
            className = "absolute -top-8.5 right-[-9px] w-[90px]" 
            />
                <img 
                src = {Star}
                className = "absolute bottom-[30px] -left-6 w-[80px]"
                />
            </div>
        </div>

    );
}