
import AvisCard from "../utils/AvisCard"

function Avis() {
    return (
        <div className=" flex flex-col items-center justify-center space-y-5 ">
            <h1 className=" font-bold text-xl dark:text-white  "> Apprécié par les Etudiants et les Educateurs </h1>
            
            <div className=" flex flex-row items-center justify-center gap-5 ">
                <AvisCard />
                <AvisCard />
            </div>
        </div>
    )
}

export default Avis