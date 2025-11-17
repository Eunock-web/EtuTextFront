import Card from "../utils/Card"
import { Calendar, Lightbulb, LucideTabletSmartphone, Monitor } from "lucide-react"


const MainList = [
    {
        id: 1,
        icon: Calendar,
        titre : " Planification Intuitive des cours ",
        description : "Structurez facilement les programmes téléchargez des matériaux et organisez le contenu  de vos cours. "
    },

    {
        id: 2, 
        icon: Monitor,
        titre: "Suivi de Progression en Temps Réel",
        description: " Suivez les performances des étudiants et les jalons d'apprentissage personnels avec des analyses détaillées. "
    },

    {
        id: 3,
        icon: Lightbulb,
        titre: "Hub de Consultation de Concepts",
        description: " Un espace dédié pour les questions-réponses, les discussions et l'approfondissement de la compréhension. "
    },

    {
        id: 4,
        icon: LucideTabletSmartphone,
        titre: " Contenu Interactif et accueillant",
        description: " Interagissez avec du contenu multimédia riche, des quiz et des devoirs collaboratifs directement dans le texte. "
    }
]
function Main() {
    return (
        <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1 items-center justify-center ">
                <h1 className=" flex font-bold text-3xl text-center "> Tout ce dont vous avez besoin en un  seul endroit </h1>
                <p className="text-center text-gray-400"> Notre plateforme est conçu pour améliorer le parcours éducatif des enseignants et des apprenants avec des outils puissants et faciles à utiliser.</p>
            </div>
            <div className=" flex flex-row gap-3 items-center justify-center  ">
                {MainList.map((item) => (
                    <Card
                        key={item.id}
                        cardClassName=" w-[20%]  border border-gray-300 rounded-lg p-4 shadow-sm bg-gray-800 border-gray-800 "
                        titre={item.titre}
                        titreClassName=" font-sans my-4  "
                        description={item.description}
                        descriptionClassName=" text-gray-400 text-sm font-sans"
                        Icon={item.icon}
                        iconClassName=" text-blue-900 w-8 h-8 "
                    />
                ))}

            </div>
        </div>
    )
}

export default Main