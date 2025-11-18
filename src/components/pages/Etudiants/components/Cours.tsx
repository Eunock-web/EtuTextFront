import { CardSim, Sun } from "lucide-react"
import AddCoursCard from "../../../utils/AddCoursCard"
import ListCard from "../../../utils/ListCard"

const coursList = [
    {
        id : 1,
        nom: "Mme. Dupont",
        matiere: "Mathématiques",
        classe: "Licence 3",
        status : "En cours"
    },

    {
        id: 2,
        nom: "Mme. Dupont",
        matiere: "Mathématiques",
        classe: "Licence 3",
        status: "En cours"
    },

    {
        id: 3,
        nom: "Mme. Dupont",
        matiere: "Mathématiques",
        classe: "Licence 3",
        status: "En cours"
    }
]

function Cours(){
    return (
        <>
            <div className=" flex flex-col space-y-5  ">
                <div className=" flex flex-col space-y-4  w-[78%] mx-auto ">

                    <div className=" flex flex-row justify-between ">

                        <div className=" flex flex-row gap-3 ">
                            <CardSim className=" w-8 h-8 text-primary/50 " />
                            <h1 className=" font-bold  text-lg "> Bonjour, Alex </h1>
                        </div>

                        <div>
                            <Sun className=" w-10 h-10 text-black border border-gray-100 p-2 rounded-xl shadow-sm " />
                        </div>

                    </div>

                    <hr className=" text-gray-200 " />

                        <h1 className=" font-bold text-4xl "> Mes Cours </h1>
                </div>

                <div className=" flex flex-col space-y-8 items-center ">

                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto w-[80%] px-4 ">
                        {coursList.map((item) => (
                            <ListCard key={item.id} titreCours={item.matiere} nomProf={item.nom} boutonDivClassName=" " bouton1ClassName=" w-[65%]  bg bg-blue-200 text-blue-800 rounded-2xl " bouton2ClassName=" w-[60%] bg bg-green-200 text-green-800 rounded-2xl" titreClassName=" font-semibold text-base text-xl  " classeTitre={item.classe} coursStatus={item.status} profClassName=" text-gray-400 text-semibold " cardClassName=" flex flex-col space-y-4 shadow-xl p-3 py-5 rounded-xl border border-gray-300 " />
                        ))}
                    </div>

                    <div className=" w-[78%] ">
                        <AddCoursCard />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Cours