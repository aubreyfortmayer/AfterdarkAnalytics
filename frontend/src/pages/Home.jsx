import Title1 from "../assets/AfterDarkText.png";
import Title2 from "../assets/AnalyticsText.png";

export default function Home() {
    return (
        <div className="flex-col items-center -mt-22">
            <img 
                src={Title1}
                alt=""
                className=""
            />
            <img 
                src={Title2}
                alt=""
                className="-mt-32"
            />
        </div>
    );
}