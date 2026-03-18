import Title1 from "../assets/AfterDarkText.png";
import Title2 from "../assets/AnalyticsText.png";
import IntroSection from "../assets/IntroSection.png";
import Question1 from "../assets/1stQuestion.png";
import Question2 from "../assets/2ndQuestion.png";
import EnergyQuestion from "../components/EnergyQuestion";
import DeadlinesQuestion from "../components/DeadlinesQuestion";
import MoodQuestion from "../components/MoodQuestion";
import Question3 from "../assets/3rdQuestion.png";
import revealButton from "../assets/revealButton.png";
import heartLocket from "../assets/heartLocket.png";
import stickersGroupCam from "../assets/stickersGroupCam.png";
import { Link } from "react-router-dom";
import {useEffect} from "react";
import{useLocation}from "react-router-dom";


export default function Home() {

    //gets current url info
    const location=useLocation();
    //runs when the route/url changes
    useEffect(()=>{
        //if url has a # so for our #intro
        if(location.hash){
            //finds the elements with the # id
            const element=document.getElementById(location.hash.substring(1));
            //if it exists, then it scrolls to it
            if(element){
                element.scrollIntoView({behavior:"smooth"});
            }
            }
            else{
                window.scrollTo({top:0,behavior:"smooth"});
            }
        },[location]);
    
    return (
        //Section 1: Title, utilizing clamp to make it responsive for different screens
        <div className="flex flex-col items-center -mt-[clamp(24px,10vw,50px)]">
            <img 
                src={Title1}
                alt=""
                className="self-start pl-[clamp(10px,2vw,24px)] h-[clamp(200px,32vw,500px)]"
            />
        
        <div id="intro" className="flex justify-end w-full pr-6">
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

        {/*Section 3: User Input Questions*/}

        {/*Question 1 Background div*/}
        <div className="relative flex justify-center">

            <img 
                src={Question1}
                alt=""
                className="h-[clamp(200px,42vw,550px)] mb-10"
            />

            {/*Div container for button divs to be on top of the question 1 background image*/}
            <div className="absolute inset-0">
                <h1 className="ml-[clamp(16px,4.5vw,60px)] mt-[clamp(14px,4vw,80px)] text-[clamp(12px,3.7vw,55px)] text-[#FCDDEC] font-['Emilys_Candy']">
                Before *potentially* going out tonight,  <br /> what’s your vibe?
                </h1>
                <EnergyQuestion />
            </div>
        </div>

        {/*Question 2 Background div*/}
        <div className="relative flex justify-center">

            <img 
                src={Question2}
                alt=""
                className="h-[clamp(100px,30vw,400px)] mb-10"
            />

            {/*Div container for button divs to be on top of the question 2 background image*/}
            <div className="absolute inset-0">
                <h1 className="ml-[clamp(16px,4.5vw,60px)] mt-[clamp(14px,4vw,80px)] text-[clamp(12px,3.7vw,55px)] text-[#FCDDEC] font-['Emilys_Candy'] mb-2">
                How many deadlines are looming?
                </h1>
                <DeadlinesQuestion />
            </div>
        </div>

        {/*Question 3 Background div*/}
        <div className="relative flex justify-center">

            <img 
                src={Question3}
                alt=""
                className="h-[clamp(200px,42vw,550px)] mb-3"
            />

            {/*Div container for button divs to be on top of the question 3 background image*/}
            <div className="absolute inset-0">
                <h1 className="ml-[clamp(16px,4.5vw,60px)] mt-[clamp(14px,4.5vw,80px)] text-[clamp(12px,3.7vw,55px)] text-[#FCDDEC] font-['Emilys_Candy']">
                What mood are you bringing into<br /> the night?
                </h1>
                <MoodQuestion />
            </div>
        </div>

        {/*Section 4: Reveal Button Area*/}
        <div className="relative flex w-full items-center justify-between">
            <img 
                src={heartLocket}
                alt=""
                className="ml-[clamp(5px,2vw,30px)] mt-[clamp(40px,8vw,100px)] h-[clamp(150px,35vw,500px)]"
            />

            <div className="absolute inset-0 flex justify-center">
                <Link to="/results">
                    <img 
                        src={revealButton}
                        alt=""
                        className="h-[clamp(100px,24vw,400px)]"
                    />
                </Link>
            </div>

                <img 
                    src={stickersGroupCam}
                    alt=""
                    className="mt-[clamp(5px,2vw,30px)] h-[clamp(200px,45vw,750px)] mr-[clamp(5px,2vw,30px)]"
                />    
        </div>
        </div>
        
    );
}