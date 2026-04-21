import MusicSymbolMoon from "../assets/MusicSymbolMoon.png"

export default function MusicPlayer() {

    //embedded a spotify playlist! 
    //from: https://developer.spotify.com/documentation/embeds
return (
    <div className="flex justify-center items-center gap-6 mt-8">
        <iframe data-testid="embed-iframe" 
        style={{borderRadius: "12px" }} 
        src="https://open.spotify.com/embed/playlist/1A2V3xLimlfh9hTeT6pIAU?utm_source=generator" 
        className = "w-[300px] h-[152px] rounded-xl"
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        allowFullScreen
        loading="lazy"></iframe> 
        

    <img
        src={MusicSymbolMoon}
        className="w-[190px] h-auto"
        />
        
    </div>
    );
}