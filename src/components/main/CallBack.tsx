import { CalendarPlus, Rocket, User } from "lucide-react"
import Card from "../utils/Card"

const CallBackInfos = [
    {
        id : 1,
        icon : User,
        titre : "1-Inscrivez-vous",
        description: "Choisissez votre rôle d'enseignant ou d'étudiant et créez votre compte en quelques secondes."
    },
    {
        id : 2,
        icon: CalendarPlus,
        titre : "2. Créez ou Rejoignez",
        description: "Les enseignants créent des cours et téléchargent du matériel. Les étudiants rejoignent avec un simple code."
    },
    {
        id : 3,
        icon: Rocket,
        titre : "3. Apprenez &amp; Suivez",
        description: " Interagissez avec du contenu interactif, collaborez et suivez les progrès sans effort. "
    }
]

function CallBack() {
    return (
        <div className=" flex flex-col space-y-8 items-center justify-center ">
            <h1 className=" text-3xl  font-bold font-sans  "> Comment ça marche </h1>

            <div className="flex flex-row items-center justify-center gap-10 ">
                {CallBackInfos.map((info) => (
                    <Card
                        key={info.id}
                        cardClassName=" w-[20%] items-center  "
                        titreClassName=" text-center  "
                        titre={ info.titre } 
                        descriptionClassName=" text-center text-gray-400 "
                        description={ info.description }
                        Icon={ info.icon }
                        iconClassName=" text-blue-400 w-12 h-12 bg-blue-400/20  p-3 rounded-full "
                    />
                ))}
                
            </div>
        </div>
    )
}

export default CallBack