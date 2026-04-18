import blueUnclickedHeart from "../assets/blueUnclickedHeart.png";
import pinkUnclickedHeart from "../assets/pinkUnclickedHeart.png";
import purpleUnclickedHeart from "../assets/purpleUnclickedHeart.png";
import purpleClickedHeart from "../assets/purpleClickedHeart.png";
import blueClickedHeart from "../assets/blueClickedHeart.png";
import pinkClickedHeart from "../assets/pinkClickedHeart.png";


//Deadline question function, uses props to get the state value "selected" from Home.jsx
//setSelected is a function to update selected value
export default function DeadlinesQuestion({selected, setSelected}) {
    //Deadline Options
    //JS array of objects (deadliness)
    const deadlineOptions = [
      {
        label: "Low      - (No deadlines in the next week)",
        unclicked: pinkUnclickedHeart,
        clicked: pinkClickedHeart,
        value: "low"
      },
      {
        label: "Medium - (Deadlines in the next week)",
        unclicked: blueUnclickedHeart,
        clicked: blueClickedHeart,
        value: "medium"
      },
      {
        label: "High     - (Deadlines in the next 3 days)",
        unclicked: purpleUnclickedHeart,
        clicked: purpleClickedHeart,
        value: "high"
      },
    ];
  
    return (
        //Buttons parent div container
        <div className="flex flex-col w-full items-start ml-[clamp(16px,4vw,60px)]">
          
          {/*For every object inside deadlineOptions array this creates a button*/}
          {deadlineOptions.map((option) => {
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
                //When clicked, it updates the state and logs which deadline was selected
                onClick={() => {
                  //sends selected value back to Home.jsx
                  setSelected(option.value);
                  console.log("Selected deadline:", option.value);
                }}
                className="flex gap-4 w-full cursor-pointer"
              >
                {/*Button heart images*/}
                <img
                    src={heartImage}
                    alt="heart button"
                    className="h-[clamp(18px,3.3vw,50px)]"
                  />
                  <span className=" text-[clamp(15px,1.7vw,40px)] text-[#FCDDEC] font-['Emilys_Candy']">{option.label}</span>
              </button>
            );
          })}
          </div>

    );
  }