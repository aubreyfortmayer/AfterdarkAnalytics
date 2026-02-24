import blueUnclickedHeart from "../assets/blueUnclickedHeart.png";
import pinkUnclickedHeart from "../assets/pinkUnclickedHeart.png";
import purpleUnclickedHeart from "../assets/purpleUnclickedHeart.png";
import purpleClickedHeart from "../assets/purpleClickedHeart.png";
import blueClickedHeart from "../assets/blueClickedHeart.png";
import pinkClickedHeart from "../assets/pinkClickedHeart.png";

import { useState } from "react";

export default function EnergyQuestion() {
    const [selectedMood, setSelectedMood] = useState("");
  
    const moodOptions = [
      {
        label: "Exhuasted",
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
        //buttons parent div container
        <div className="flex flex-col gap-1 w-full items-start mt-10 ml-10">
    
          {moodOptions.map((option) => {
            const isSelected = selectedMood === option.label;
    
            return (
              //buttons divs
              <button
                key={option.label}
                type="button"
                onClick={() => setSelectedMood(option.label)}
                className="flex gap-4 w-full cursor-pointer"
              >
                <img
                  src={isSelected ? option.clicked : option.unclicked}
                  alt=""
                  className="h-[clamp(30px,6vw,60px)]"
                />
                <span className="mt-3 text-lg text-[#FCDDEC] font-['Emilys_Candy']">{option.label}</span>
              </button>
            );
          })}
          </div>

    );
  }