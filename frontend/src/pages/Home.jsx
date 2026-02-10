import Title1 from "../assets/AfterDarkText.png";
import Title2 from "../assets/AnalyticsText.png";
import IntroSection from "../assets/IntroSection.png";

export default function Home() {
    return (
        //Section 1: Title, utilizing clamp to make it responsive for different screens
        <div className="flex flex-col items-center -mt-[clamp(24px,10vw,50px)]">
            <img 
                src={Title1}
                alt=""
                className="self-start pl-[clamp(10px,2vw,24px)] h-[clamp(200px,32vw,500px)]"
            />
        
        <div className="flex justify-end w-full pr-6">
            <img 
                src={Title2}
                alt=""
                className="-mt-[clamp(80px,16vw,200px)] h-[clamp(100px,22vw,500px)]"
            />
        </div>

        {/*Section 2: Intro*/}
        <div className="flex justify-end w-full">
            <img 
                src={IntroSection}
                alt=""
                className="-mt-[clamp(80px,16vw,200px)] h-[clamp(200px,60vw,800px)]"
            />

        </div>

        </div>
    );
}