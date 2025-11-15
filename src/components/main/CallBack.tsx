import { User } from "lucide-react"
import Card from "../utils/Card"


function CallBack() {
    return (
        <div className=" flex flex-col space-y-5 items-center justify-center ">
            <h1 className=" text-2xl  font-bold font-sans  "> Comment ça marche </h1>

            <div className="flex flex-row items-center justify-center gap-10 ">
                <Card
                    cardClassName=" w-[20%] items-center  "
                    titreClassName=" text-center  "
                    titre=" 1-Inscrivez-vous " 
                    descriptionClassName=" text-center text-gray-400 "
                    description=" Choisissez votre type d'utilisateur (Professeur ou Etudiant) et suivez les instructions pour vous inscrire. "
                    Icon={ User }
                    iconClassName=" text-blue-500 w-10 h-10 bg-blue-900 p-2 rounded-full "
                />

                <Card
                    cardClassName=" w-[20%] items-center "
                    titreClassName=" text-center  "
                    titre=" 1-Inscrivez-vous "
                    descriptionClassName=" text-center text-gray-400 "
                    description=" Choisissez votre type d'utilisateur (Professeur ou Etudiant) et suivez les instructions pour vous inscrire. "
                    Icon={User}
                    iconClassName=" text-blue-500 w-10 h-10 p-2 bg-blue-900 rounded-full "
                />

                <Card
                    cardClassName=" w-[20%] items-center "
                    titreClassName=" text-center  "
                    titre=" 1-Inscrivez-vous "
                    descriptionClassName=" text-center text-gray-400 "
                    description=" Choisissez votre type d'utilisateur (Professeur ou Etudiant) et suivez les instructions pour vous inscrire. "
                    Icon={User}
                    iconClassName=" text-blue-500 w-10 h-10 p-2 bg-blue-900 rounded-full "
                />

                
            </div>
        </div>
    )
}

export default CallBack