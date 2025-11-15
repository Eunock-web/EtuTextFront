import Card from "../utils/Card"
import { BookOpenText } from "lucide-react"

function Main() {
    return (
        <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1 items-center justify-center ">
                <h1 className=" flex font-bold text-3xl text-center "> Tout ce dont vous avez besoin en un  seul endroit </h1>
                <p className="text-center text-gray-400"> Notre plateforme est conçu pour améliorer le parcours éducatif des enseignants et des apprenants avec des outils puissants et faciles à utiliser.</p>
            </div>
            <div className=" flex flex-row gap-3 items-center justify-center  ">
                <Card
                    cardClassName=" w-[18%] border border-gray-300 rounded-lg p-4 shadow-xl bg-gray-800 border-gray-800 "
                    titre=" Planification Intuitive des cours "
                    titreClassName=" font-sans "
                    description="Structurez facilement les programmes téléchargez des matériaux et organisez le contenu  de vos cours. "
                    descriptionClassName=" text-gray-400 text-sm font-sans"
                    Icon={ BookOpenText }
                    iconClassName=" text-blue-900 w-7 h-7 "
                />

                <Card
                    cardClassName=" w-[18%] border border-gray-300 rounded-lg p-4 shadow-xl bg-gray-800 border-gray-800 "
                    titre=" Planification Intuitive des cours "
                    titreClassName=" font-sans "
                    description="Structurez facilement les programmes téléchargez des matériaux et organisez le contenu  de vos cours. "
                    descriptionClassName=" text-gray-400 text-sm font-sans"
                    Icon={BookOpenText}
                    iconClassName=" text-blue-900 w-7 h-7 "
                />

                <Card
                    cardClassName=" w-[18%] border border-gray-300 rounded-lg p-4 shadow-xl bg-gray-800 border-gray-800 "
                    titre=" Planification Intuitive des cours "
                    titreClassName=" font-sans "
                    description="Structurez facilement les programmes téléchargez des matériaux et organisez le contenu  de vos cours. "
                    descriptionClassName=" text-gray-400 text-sm font-sans"
                    Icon={BookOpenText}
                    iconClassName=" text-blue-900 w-7 h-7 "
                />

                <Card
                    cardClassName=" w-[18%] border border-gray-300 rounded-lg p-4 shadow-xl bg-gray-800 border-gray-800 "
                    titre=" Planification Intuitive des cours "
                    titreClassName=" font-sans "
                    description="Structurez facilement les programmes téléchargez des matériaux et organisez le contenu  de vos cours. "
                    descriptionClassName=" text-gray-400 text-sm font-sans"
                    Icon={BookOpenText}
                    iconClassName=" text-blue-900 w-7 h-7 "
                />
            </div>
        </div>
    )
}

export default Main