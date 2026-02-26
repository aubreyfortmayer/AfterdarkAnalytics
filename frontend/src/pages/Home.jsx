import Title1 from "../assets/AfterDarkText.png";
import Title2 from "../assets/AnalyticsText.png";
import IntroSection from "../assets/IntroSection.png";
import Question1 from "../assets/1stQuestion.png";
import EnergyQuestion from "../components/EnergyQuestion";


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
        <div id="intro" className="flex justify-end w-full">
            <img 
                src={IntroSection}
                alt=""
                className="-mt-[clamp(80px,16vw,200px)] h-[clamp(200px,60vw,800px)]"
            />

        </div>

        {/*Section 3: User Input Questions*/}

        {/*Question Background div*/}
        <div className="relative flex justify-center mb-100">

            <img 
                src={Question1}
                alt=""
                className="h-[clamp(200px,42vw,550px)]"
            />

            {/*Div container for button divs to be on top of the question 1 background image*/}
            <div className="absolute inset-0">
                <h1 className="ml-[clamp(16px,4vw,60px)] mt-[clamp(14px,4vw,80px)] text-[clamp(12px,3.7vw,55px)] text-[#FCDDEC] font-['Emilys_Candy']">
                Before *potentially* going out tonight,  <br /> what’s your vibe?
                </h1>
                <EnergyQuestion />
            </div>
        </div>

        
        </div>
    );
}