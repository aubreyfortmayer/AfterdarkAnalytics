import MusicPlayer from "../components/MusicPlayer";
import Heart from "../assets/heartMusicButton.png";
import Star from "../assets/starMusicButton.png";
import Title from "../assets/ResultsTitle.png";


export default function Results() {
    return (
        //relative, want to position the stickers around it using the music button's location
        //stack vertical, center everything horizontally, text center, mt-16 move section down
        <div className="relative flex flex-col items-center text-center min-h-[80vh]">
            
            <img 
            src = {Title}
            className = "mt-10 w-[370px]"
            />
            <div className = "mt-auto mb-16 relative"> 
                <MusicPlayer />
                <img 
            src = {Heart}
            //top-8.5, move to the top, right - used exact pixel values
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