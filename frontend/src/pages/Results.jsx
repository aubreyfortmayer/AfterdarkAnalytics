import MusicPlayer from "../components/MusicPlayer";
import Heart from "../assets/heartMusicButton.png";
import Star from "../assets/starMusicButton.png";
import Title from "../assets/ResultsTitle.png";
import SpinTheBottle from "../components/SpinTheBottle"
import Martini from "../components/Martini"
import MartiniStickers from "../assets/MartiniSticker.png"
import CuteKissMark from "../assets/100CuteKiss.png"

export default function Results() {
    return (
        //stack vertical (flex)
        // center everything horizontally (items-center), 
        // text center (text-center), 
        //minimum height, need extra height so 140 (min-h-[140vh])
        //w-full, full width of container used
        //max width = 900 px (max-w-[900px])
        <div className="relative flex flex-col items-center text-center min-h-[140vh] w-full max-w-[900px] mx-auto">
            
            <img 
            src = {Title}
            //mt-10, moving the title down from the top of the page
            className = "mt-10 w-[370px]"
            />

            <img 
                src = {CuteKissMark}
                alt = "100% Cute!"
                className = "absolute w-67 rotate-[10deg] right-10 top-24"
            />


            {/*layout box, mt-20 moving it from elemennt ABOVE it, so the title page
                relative, items inside the box will position themselves based on
                this box, NOT the page
            */}
            <div className = "mt-20 relative w-full max-w-[700px] h-[550px]">
                {/*centered horizontally + moved 35 px to right*/}
                <div className="absolute left-1/2 -translate-x-1/2 top-[0px]">
                     <SpinTheBottle/>
                </div>
                   

                {/*absolute, placed within the relative container*/}
                <div className = "absolute left-[-150px] top-[180px]">
                
                {/*animation, not fully implemented yet*/}
                 <Martini probability={100}/>

                </div>
                
                 <img
                src = {MartiniStickers}
                className = "absolute left-[-120px] top-[-10px] w-[185px]"
                />
                
               
             
            </div>

            {/* relative, want to position the stickers around wrapper using the music button's location
            */}

            {/*mt-auto, the music button is pushed down as far as it can be */}
            <div className = "mt-auto mb-16 relative"> 
                {/*music button positioned towards bottom */}
                <MusicPlayer />
                
                
            {/* heart sticker, top-8.5, move to the top, right - used exact pixel values*/}
            <img 
            src = {Heart}
            className = "absolute -top-8.5 right-[-9px] w-[90px]" 
            />
            
            {/*star sticker, -left makes the pixel value negative*/}
            <img 
            src = {Star}
            className = "absolute bottom-[30px] -left-6 w-[80px]"
            />

            </div>
        </div>

    );
}