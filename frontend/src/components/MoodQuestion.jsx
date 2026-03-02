import blueUnclickedHeart from "../assets/blueUnclickedHeart.png";
import pinkUnclickedHeart from "../assets/pinkUnclickedHeart.png";
import purpleUnclickedHeart from "../assets/purpleUnclickedHeart.png";
import purpleClickedHeart from "../assets/purpleClickedHeart.png";
import blueClickedHeart from "../assets/blueClickedHeart.png";
import pinkClickedHeart from "../assets/pinkClickedHeart.png";

import { useState } from "react";

export default function MoodQuestion(){

    //selectedMood = "", initalizing state
    const [selectedMood, setSelectedMood] = useState("");
    //Mood Options
    //JS array of objects (moods)
    const moodOptions = [
      {
        label: "Stressed",
        unclicked: pinkUnclickedHeart,
        clicked: pinkClickedHeart,
        value: "stressed",
      },
      {
        label: "Neutral",
        unclicked: blueUnclickedHeart,
        clicked: blueClickedHeart,
        value: "neutral",
      },
      {
        label: "Sad",
        unclicked: purpleUnclickedHeart,
        clicked: purpleClickedHeart,
        value: "sad",
      },
      {
        label: "Relaxed",
        unclicked: pinkUnclickedHeart,
        clicked: pinkClickedHeart,
        value: "relaxed",
      },
      {
        label: "Happy",
        unclicked: blueUnclickedHeart,
        clicked: blueClickedHeart,
        value: "happy",
      },
    ];
  
    return (
        //Buttons parent div container
        <div className="flex flex-col w-full items-start ml-[clamp(16px,4vw,60px)]">
          
          {/*For every object inside moodOptions array this creates a button*/}
          {moodOptions.map((option) => {
            const isSelected = selectedMood === option.value;
            
            //Heart image that is displayed
            let heartImage;
            if (isSelected) {
              heartImage = option.clicked;} 
              else {
              heartImage = option.unclicked; }
    
            return (
              //Buttons divs
              <button
                key={option.value}
                type="button"
                //When clicked, it updates the state and logs which mood was selected
                onClick={() => {
                  setSelectedMood(option.value);
                  console.log("Selected mood:", option.value);
                }}
                className="flex gap-4 w-full cursor-pointer"
              >
                {/*Button heart images*/}
                  <img
                    src={heartImage}
                    alt="heart button"
                    className="h-[clamp(15px,4.5vw,60px)]"
                  />
                  <span className=" ml-2 text-[clamp(11px,3vw,35px)] text-[#FCDDEC] font-['Emilys_Candy']">{option.label}</span>
              </button>
            );
          })}
          </div>

    );
  }










