import { GraduationCap } from "lucide-react"


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
                <div className="flex flex-col space-y-2">
                    <h1 className=" font-semibold "> Entreprise </h1>
                    <p className=" text-gray-400 text-sm"> A propos </p>
                    <p className=" text-gray-400 text-sm"> Carrieres </p>
                    <p className=" text-gray-400 text-sm"> Presse </p>
                </div>

                <div className="flex flex-col space-y-2">
                    <h1 className=" font-semibold "> Légal </h1>
                    <p className=" text-gray-400 text-sm"> Condition d'utilisation </p>
                    <p className=" text-gray-400 text-sm"> Politique de confidentialité </p>
                    <p className=" text-gray-400 text-sm"> Politique de Cookies </p>
                </div>

                <div className="flex flex-col space-y-2">
                    <h1 className=" font-semibold "> Support </h1>
                    <p className=" text-gray-400 text-sm"> Centre d'aide </p>
                    <p className=" text-gray-400 text-sm"> Nous contacter </p>
                    <p className=" text-gray-400 text-sm"> Statut </p>
                </div>
            </div>
        </div>
    )
}

export default PreFooter