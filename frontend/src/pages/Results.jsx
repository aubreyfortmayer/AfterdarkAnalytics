import MusicPlayer from "../components/MusicPlayer";
import Heart from "../assets/heartMusicButton.png";
import Star from "../assets/starMusicButton.png";
import Title from "../assets/ResultsTitle.png";
import SpinTheBottle from "../components/SpinTheBottle"


export default function Results() {
    return (
        //stack vertical, center everything horizontally, text center, mt-16 move section down
        <div className="relative flex flex-col items-center text-center min-h-[80vh] w-full">
            
            <img 
            src = {Title}
            className = "mt-10 w-[370px]"
            />

            <div className = "mt-16 flex w-full">
                {/*centered horizontally + moved 35 px to right*/}
                <div className = "mx-auto translate-x-[35px]">
                     <SpinTheBottle/>
                </div>
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