import { GraduationCap } from "lucide-react"

const PreFooterList = [
    {
        id: 1,
        titre: "Entreprise",
        link1 : "A propos",
        link2 : "Carrieres",
        link3 : "Presse",
    },

    {
        id : 2,
        titre: "Légal",
        link1 : "Condition d'utilisation",
        link2 : "Politique de confidentialité",
        link3 : "Politique de Cookies",
    },

    {
        id : 3,
        titre: "Support",
        link1 : "Centre d'aide",
        link2 : "Nous contacter",
        link3 : "Statut",
    }
]

function PreFooter() {
    return (
        <div className=" flex flex-row justify-center items-center gap-10">

            <div className=" flex flex-col space-y-3 w-[20%] " >
                <div className=" flex flex-row gap-2 " >
                    <GraduationCap className="w-8 h-8 dark:text-blue-800" />
                    <h1 className=" dark:text-white font-semibold text-xl "> EduText </h1>
                </div>

                <div className=" dark:text-white text-gray-400 ">
                    <p className=" text-gray-400 "> Révolutionner l'apprentissage numérique pour les enseignants et les étudiants. </p>
                </div>
            </div>

            <div className=" flex flex-row gap-10" >
                {PreFooterList.map((item) => (
                    <div className="flex flex-col space-y-3">
                        <h3 className=" text-base text-white mb-4 font-semibold "> { item.titre } </h3>
                        <a href=" # " className=" text-gray-400 text-sm hover:text-slate-600 cursor-pointer "> { item.link1 } </a>
                        <a href=" # " className=" text-gray-400 text-sm hover:text-slate-600 cursor-pointer "> { item.link2 } </a>
                        <a href=" # " className=" text-gray-400 text-sm hover:text-slate-600 cursor-pointer "> { item.link3 } </a>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default PreFooter