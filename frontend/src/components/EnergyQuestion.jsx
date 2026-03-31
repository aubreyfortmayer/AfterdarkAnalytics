import blueUnclickedHeart from "../assets/blueUnclickedHeart.png";
import pinkUnclickedHeart from "../assets/pinkUnclickedHeart.png";
import purpleUnclickedHeart from "../assets/purpleUnclickedHeart.png";
import purpleClickedHeart from "../assets/purpleClickedHeart.png";
import blueClickedHeart from "../assets/blueClickedHeart.png";
import pinkClickedHeart from "../assets/pinkClickedHeart.png";


//Energy question function, uses props to get the state value "selected" from Home.jsx
//setSelected is a function to update selected value
export default function EnergyQuestion({selected, setSelected}) {
    //Energy Options
    //JS array of objects (energys)
    const energyOptions = [
      {
        label: "Exhausted",
        unclicked: pinkUnclickedHeart,
        clicked: pinkClickedHeart,
        value: "exhausted",
      },
      {
        label: "Low Energy",
        unclicked: blueUnclickedHeart,
        clicked: blueClickedHeart,
        value: "lowEnergy",
      },
      {
        label: "Neutral",
        unclicked: purpleUnclickedHeart,
        clicked: purpleClickedHeart,
        value: "neutral",
      },
      {
        label: "Energized",
        unclicked: pinkUnclickedHeart,
        clicked: pinkClickedHeart,
        value: "energized",
      },
      {
        label: "Extremely Energized",
        unclicked: blueUnclickedHeart,
        clicked: blueClickedHeart,
        value: "extremelyEnergized",
      },
    ];
  
    return (
        //Buttons parent div container
        <div className="flex flex-col w-full items-start ml-[clamp(16px,4vw,60px)]">
          
          {/*For every object inside energyOptions array this creates a button*/}
          {energyOptions.map((option) => {
            //checks if selected equals value and if so is shows the clicked heart image
            const isSelected=selected===option.value;

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
                //When clicked, it updates the state and logs which energy was selected
                onClick={() => {
                  //sends selected value back to Home.jsx
                  setSelected(option.value);
                  console.log("Selected energy:", option.value);
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