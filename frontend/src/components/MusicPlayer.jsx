import MusicSymbolMoon from "../assets/MusicSymbolMoon.png"

export default function MusicPlayer() {

return (
    <div className="flex justify-center items-center gap-6 mt-8">
        <iframe data-testid="embed-iframe" 
        style={{borderRadius: "12px" }} 
        src="https://open.spotify.com/embed/playlist/1A2V3xLimlfh9hTeT6pIAU?utm_source=generator" 
        width="300" 
        height="152"
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