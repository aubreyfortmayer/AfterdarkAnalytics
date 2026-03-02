import {useRef, useState} from "react";
// import goingOutSong from "../assets/goingOutSong.mp3";
import MusicButton from "../assets/MusicButton.png";

export default function MusicPlayer() {
//     const audio = useRef(null);
//     //lets us control playing, pausing, etc.


    //creates state inside component, this state is whether the music is playing
    const [playing, startPlaying] = useState(false);

    const playMusic = () => {
        if (!audio.current)
            return;

        if (playing) {
            audio.current.pause();
        }

        else {
            audio.current.play();
        }


    startPlaying( prev => !prev);
};

return (
    <div className="flex justify-center">
        <img
        src = {MusicButton}
        alt="set the mood"
        onClick = {playMusic}
        //h-auto, adjusts height based on conttent of page
        className = "w-[240px] h-auto"
        />
        {/* <audio ref = {audio} src = {goingOutSong} /> */}
    </div>
    );
}