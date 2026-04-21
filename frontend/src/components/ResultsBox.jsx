import ResultsBoxPicture from "../assets/ResultsBox.png"

export default function ResultsBox({probability}) {
    const resultPercent = Math.round(probability * 100)
    function showMessage(resultPercent) {
        let message = ""

        if (resultPercent >= 90) {
            message = "YES! The city needs you, diva"
            return message
        }

        else if (resultPercent >= 70) {
            message = "I see the vision, you should go!"
            return message
        }

        else if (resultPercent >= 50) {
            message = "Could be fun for the plot..."
            return message
        }

        else if (resultPercent >= 30){
            message = "Ehhh maybe some other time? Baddies need their rest too"
            return message
        }
        
        else {
            message = "Stay inside tonight, queen"
            return message
        }
    
    }
    
    
    return (
        <div className="relative flex justify-center items-center mt-10">

            <img
                src = {ResultsBoxPicture}
                alt = "Results Box"
                className = "w-[420px]"
            />

        <div className="absolute text-center"
        style ={{fontFamily: "'Emilys Candy', cursive"}}
        >
            
            <h2 className="text-4xl">
                {resultPercent}% </h2>


            <p className = "text-2xl mt-5">
                {showMessage(resultPercent)}
                </p> 
        </div>
                   
        </div>
    )
}