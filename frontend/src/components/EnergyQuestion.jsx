import blueUnclickedHeart from "../assets/blueUnclickedHeart.png";
import pinkUnclickedHeart from "../assets/pinkUnclickedHeart.png";
import purpleUnclickedHeart from "../assets/purpleUnclickedHeart.png";
import purpleClickedHeart from "../assets/purpleClickedHeart.png";
import blueClickedHeart from "../assets/blueClickedHeart.png";
import pinkClickedHeart from "../assets/pinkClickedHeart.png";

import { useState } from "react";

//Energy question function
export default function EnergyQuestion() {
    //selectedMood = "", initalizing state
    const [selectedMood, setSelectedMood] = useState("");
    //Mood Options
    //JS array of objects (moods)
    const moodOptions = [
      {
        label: "Exhausted",
        unclicked: pinkUnclickedHeart,
        clicked: pinkClickedHeart,
      },
      {
        label: "Low Energy",
        unclicked: blueUnclickedHeart,
        clicked: blueClickedHeart,
      },
      {
        label: "Neutral",
        unclicked: purpleUnclickedHeart,
        clicked: purpleClickedHeart,
      },
      {
        label: "Energized",
        unclicked: pinkUnclickedHeart,
        clicked: pinkClickedHeart,
      },
      {
        label: "Extremely Energized",
        unclicked: blueUnclickedHeart,
        clicked: blueClickedHeart,
      },
    ];
  
    return (
        //Buttons parent div container
        <div className="flex flex-col w-full items-start ml-[clamp(16px,4vw,60px)]">
          
          {/*For every object inside moodOptions array this creates a button*/}
          {moodOptions.map((option) => {
            const isSelected = selectedMood === option.label;
            
            //Heart image that is displayed
            let heartImage;
            if (isSelected) {
              heartImage = option.clicked;} 
              else {
              heartImage = option.unclicked; }
    
            return (
              //Buttons divs
              <button
                key={option.label}
                type="button"
                //When clicked, it updates the state and logs which energy was selected
                onClick={() => {
                  setSelectedMood(option.label);
                  console.log("Selected energy:", option.label);
                }}
                className="flex gap-4 w-full cursor-pointer"
              >
                {/*Button heart images*/}
                  <img
                    src={heartImage}
                    alt="heart button"
                    className="h-[clamp(15px,4.5vw,60px)]"
                  />
                  <span className=" text-[clamp(11px,3vw,35px)] text-[#FCDDEC] font-['Emilys_Candy']">{option.label}</span>
              </button>
            );
          })}
          </div>

    );
  }