import {useState} from "react";
import bottle from "../assets/bottle.png"
import spinBoard from "../assets/spinBoard.png"

export default function SpinTheBottle() {
   const [rotation, setRotation] = useState(0);

   const spinBottle = () =>  {
    const randomSpin = Math.floor(Math.random() * 2000) + 1000;
    setRotation(prev=> prev+randomSpin);
   };


   return ( <div className = "relative w-60 h-60 flex items-center justify-center">
    <img 
        src = {spinBoard}
        className ="absolute inset-0 w-full h-full"
        alt = "Spin Board"
    />

    <img 
        src = {bottle}
        onClick = {spinBottle}
        className = "w-34 transition-transform duration-[3000ms] cursor-pointer"
        style ={{
            transform: `translate(-25%, -35%) rotate(${rotation}deg)`,
            transformOrigin: "50% 70%" 
        }}
        alt = "Bottle"
    />
</div>);
  

}
