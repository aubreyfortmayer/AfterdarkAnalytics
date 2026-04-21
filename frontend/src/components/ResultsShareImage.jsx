import {useRef,useState} from "react";
import {toPng} from "html-to-image";

import goOutImage from "../assets/goOutImage.png"
import stayInImage from "../assets/stayInImage.png"
import shareButton from "../assets/shareButton.png";

export default function ResultsShareImage({probability}){
    //tracking if image popup is shown
    const [showPopup, setShowPopup] = useState(false);
    //tracking element to turn into png image later
    const resultsShareImage = useRef(null);
    //TO DO: change to actual result value later
    const resultPercent= Math.round(probability * 100);
    const isGoOut = resultPercent > 50;
    //if isGoOut is true, do 1st option, if not then stay in & use 2nd option
    const backgroundImage = isGoOut ? goOutImage : stayInImage;
    const percentColor = isGoOut ? "text-[#A9568A]" : "text-[#509CD6]";

    //turns popout into an image to download into a png
    const downloadImage = async()=>{
        if(!resultsShareImage.current) return;
        try{
            const dataUrl=await toPng(resultsShareImage.current,{
                cacheBust: true,
            });
            const link=document.createElement("a");
            link.download="afterDarkResult.png";
            link.href=dataUrl;
            link.click();
        }catch(error){
            console.error("failed to download card:",error);
        }
        };

        return (
          <>
            <button type="button"
              onClick={() => setShowPopup(true)}>
              <img 
                src={shareButton}
                alt=""
                className="h-[clamp(100px,10vw,400px)]"
              />
            </button>

            {/*if showPopup is true then displays it all*/}
            {showPopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                {/*popup container*/}
                <div className="bg-white p-4 rounded-xl shadow-lg relative">
                  {/*everything inside this div is what is shared*/}
                  <div
                    ref={resultsShareImage}
                    className="relative w-[320px] h-[570px] overflow-hidden rounded-xl"
                  >
                    {/*background image*/}
                    <img
                      src={backgroundImage}
                      alt="Share card background"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                    {/*all the text above the background image*/}
                    <div className="absolute inset-0 font-['Emilys_Candy']">
                      <p className={`absolute top-[217px] left-[183px] text-[30px] font-bold ${percentColor} drop-shadow-[0_0_2px_#FCDDEC] [text-shadow:0_0_20px_#FCDDEC]`}>
                        {resultPercent}%
                      </p>
                      <p className="absolute top-[230px] left-[233px] text-[11px] font-bold text-[#FCDDEC]">
                        of students in
                      </p>
                      <p className="absolute top-[250px] left-[189px] text-[11px] font-bold text-[#FCDDEC]">
                        your situation would...
                      </p>
                  
                    </div>
                  </div>
                  {/*bottom buttons section*/}
                  <div className="mt-4 flex justify-center gap-3">
                    <button
                      onClick={downloadImage}
                      className="px-4 py-2 rounded-md bg-[#A9568A] border border-[#FCDDEC] text-[#FCDDEC] font-bold font-['Emilys_Candy']"
                    >
                      Download to Share
                    </button>
      
                    <button
                      onClick={() => setShowPopup(false)}
                      className="px-4 py-2 bg-[#FCDDEC] rounded-md border border-[#A9568A] text-[#A9568A] font-semibold font-['Emilys_Candy']">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      }
