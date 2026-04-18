import Title1 from "../assets/AfterDarkText.png";
import Title2 from "../assets/AnalyticsText.png";
import starsBorder from "../assets/stars.png";
import intro from "../assets/intro.png";
import Question1 from "../assets/1stQuestion.png";
import Question2 from "../assets/2ndQuestion.png";
import EnergyQuestion from "../components/EnergyQuestion";
import DeadlinesQuestion from "../components/DeadlinesQuestion";
import MoodQuestion from "../components/MoodQuestion";
import Question3 from "../assets/3rdQuestion.png";
import revealButton from "../assets/revealButton.png";
import heartLocket from "../assets/heartLocket.png";
import stickersGroupCam from "../assets/stickersGroupCam.png";
import { useState, useEffect } from "react";
import{useLocation}from "react-router-dom";
import{useNavigate}from "react-router-dom";


export default function Home() {

    //gets current url info
    const location=useLocation();
    useEffect(()=> {
        if(location.hash){
            const element=document.querySelector(location.hash);
            if(element){
                element.scrollIntoView({behavior:"smooth"});
            }
        }
    },[location]);
    //allows you to manually change the user's page
    const navigate = useNavigate();
    //react state vars to store when the user clicks an answer
    const [energy, setEnergy]= useState(null);
    const [deadlines, setDeadlines]= useState(null);
    const [mood, setMood]= useState(null);
    
    // added this to actually send stuff to the backend - AUBREY
    const submitToBackend = async (payload) => {
        const response = await fetch("http://127.0.0.1:8000/predict/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            throw new Error("Backend request failed");
        }

        return await response.json();
    };

    // edited this also - AUBREY
    const handleRevealClick = async () => {
        if (energy == null || deadlines == null || mood == null) {
            alert("Error: Please answer all questions to get your results!");
            return;
        }

        try {
            const payload = {
                forecasted_weather: "Clear Skies",
                mood_level: mood,
                energy_level: energy,
                responsibility_level: deadlines
            };

            const data = await submitToBackend(payload);

            navigate("/results", { state: data });

        } catch (error) {
            console.error(error);
            alert("Something went wrong connecting to the server.");
        }
    };


    return (
        //Section 1: Title, utilizing clamp to make it responsive for different screens
        <div className="flex flex-col items-center -mt-[clamp(12px,5vw,25px)]">
            <img 
                src={Title1}
                alt=""
                className="self-start pl-[clamp(40px,8vw,150px)] h-[clamp(150px,20vw,400px)]"
            />
        
        <div className="flex justify-end w-full pr-6">
            <img 
                src={Title2}
                alt=""
                className="-mt-[clamp(40px,10vw,300px)] h-[clamp(100px,15vw,250px)] pr-[clamp(5px,10vw,100px)]"
            />
        </div>

        {/*Section 2: Intro*/}
        <div id="intro" className="flex flex-col w-full">
            <img 
                src={intro}
                alt=""
                className="-mt-[clamp(20px,8vw,250px)] h-[clamp(100px,65vw,500px)] object-contain"
            />
            <img 
                src={starsBorder}
                alt=""
                className="w-full h-[clamp(14px,7vw,200px)] mb-[clamp(20px,5vw,200px)] object-cover"
            />

        </div>

        {/*Section 3: User Input Questions*/}
        {/*Question 1 Background div*/}
        <div id="questions" className="relative flex justify-center">

            <img 
                src={Question1}
                alt=""
                className="h-[clamp(200px,27vw,550px)] mb-10"
            />

            {/*Div container for button divs to be on top of the question 1 background image*/}
            <div className="absolute inset-0">
                <h1 className="ml-[clamp(18px,3.5vw,40px)] mt-[clamp(20px,2vw,40px)] text-[clamp(20px,2.5vw,40px)] text-[#FCDDEC] font-['Emilys_Candy']">
                Before *potentially* going out tonight,  <br /> what’s your vibe?
                </h1>
                <EnergyQuestion selected={energy} setSelected={setEnergy} />
            </div>
        </div>

        {/*Question 2 Background div*/}
        <div className="relative flex justify-center">

            <img 
                src={Question2}
                alt=""
                className="h-[clamp(140px,20vw,550px)] mb-10"
            />

            {/*Div container for button divs to be on top of the question 2 background image*/}
            <div className="absolute inset-0">
                <h1 className="ml-[clamp(18px,3.5vw,40px)] mt-[clamp(25px,3vw,40px)] text-[clamp(20px,2.5vw,40px)] text-[#FCDDEC] font-['Emilys_Candy']">
            How many deadlines are looming?
                </h1>
                <DeadlinesQuestion  selected={deadlines} setSelected={setDeadlines}/>
            </div>
        </div>

        {/*Question 3 Background div*/}
        <div className="relative flex justify-center">

            <img 
                src={Question3}
                alt=""
                className="h-[clamp(200px,27vw,550px)] mb-10"
            />

            {/*Div container for button divs to be on top of the question 3 background image*/}
            <div className="absolute inset-0">
                <h1 className="ml-[clamp(18px,3.5vw,40px)] mt-[clamp(20px,2vw,40px)] text-[clamp(20px,2.5vw,40px)] text-[#FCDDEC] font-['Emilys_Candy']">
                What mood are you bringing into<br /> the night?
                </h1>
                <MoodQuestion selected={mood} setSelected={setMood} />
            </div>
        </div>

        {/*Section 4: Reveal Button Area*/}
        <div className="relative flex w-full items-center justify-between">
            <img 
                src={heartLocket}
                alt=""
                className="ml-[clamp(20px,8vw,100px)] h-[clamp(150px,27vw,500px)]"
            />

            <div className="absolute inset-0 flex justify-center">
                {/*reveal button*/}
                <button type="button" onClick={handleRevealClick}>
                    <img 
                        src={revealButton}
                        alt=""
                        className="-mt-[clamp(20px,26vw,220px)] h-[clamp(100px,22vw,400px)]"
                    />
                </button>
            </div>

                <img 
                    src={stickersGroupCam}
                    alt=""
                    className=" h-[clamp(200px,35vw,650px)] mr-[clamp(5px,2vw,30px)] mb-[clamp(5px,2vw,30px)]"
                />    
        </div>
        </div>
        
    );
}