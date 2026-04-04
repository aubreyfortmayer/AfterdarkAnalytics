import {useState} from "react";
import bottle from "../assets/bottle.png"
import spinBoard from "../assets/spinBoard.png"


export default function SpinTheBottle() {
    //beginning at 0 degrees, setRotation will update that value 
   const [rotation, setRotation] = useState(0);



   const spinBottle = () =>  {
    const randomSpin = Math.floor(Math.random() * 2000) + 1000;
    //want to start from the previous rotation, then spin from there! 
    setRotation(prev=> prev+randomSpin);
   };


   //relative, want to position the elements in relation to the container
   //flex item-center (vertical), justify-center (horizontal) --> position it perfectly centered 
   return ( <div className = "relative w-[clamp(280px, 40vw, 450px)] flex items-center justify-center">
    <img 
        src = {spinBoard}
        //inset-0, filling the entire container
        className ="absolute inset-0 w-full h-full"
        alt = "Spin Board"
    />

    <img 
        src = {bottle}
        //click the bottle to spin
        onClick = {spinBottle}
        className = "w-[70%] transition-transform duration-[3000ms] cursor-pointer"
        style ={{
            //rotates the bottle!, translated to perfect the position of beer bottle
            transform: `translate(-25%, -35%) rotate(${rotation}deg)`,
            
            //where the bottle rotates
            transformOrigin: "50% 70%" 
        }}
        alt = "Bottle"
    />
</div>);
  

}
