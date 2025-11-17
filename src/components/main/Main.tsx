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
            <div className=" flex flex-col space-y-8 px-4 sm:px-6 lg:px-8 py-12" >
            <div className="flex flex-col space-y-4 max-w-4xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Tout ce dont vous avez besoin en un seul endroit
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Notre plateforme est conçue pour améliorer le parcours éducatif des enseignants et des apprenants avec des outils puissants et faciles à utiliser.
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full px-4">
                {MainList.map((item) => (
                    <Card
                        key={item.id}
                        cardClassName="flex flex-col h-full border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm bg-white dark:bg-gray-800 hover:shadow-md transition-shadow duration-300"
                        titre={item.titre}
                        titreClassName="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                        description={item.description}
                        descriptionClassName="text-sm text-gray-600 dark:text-gray-300 flex-grow"
                        Icon={item.icon}
                        iconClassName="w-10 h-10 p-2 mb-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    />
                ))}
            </div>
        </div>
        )
}

export default Main