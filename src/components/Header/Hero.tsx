import Button from "../utils/Button"


function Hero() {
    return (
        <div className=" flex flex-row mx-[5%] gap-3 items-center justify-center lg:items-start lg:justify-start  mt-10 " >

            <div className="grid sm:grid-cols-1 flex-col w-3/2 space-y-5 ">
                <div className="flex flex-col space-y-3 justify-start">
                    <h1 className=" dark:text-5xl font-bold text-white lg:text-4xl sm:text-3xl text-2xl  "> Révolutionnez Votre Experience d'Apprentissage et d'Enseignement </h1>
                    <p className=" dark:text-slate-400 text-lg font-normal text-gray-300"> Le hub ultime de manuels numeriques pour une planification de cours, un suivi de progression et une collaboration fluides. </p>
                </div>

                <div className=" flex flex-col space-y-2 ">
                    <Button className="bg-blue-500 text-white w-1/2 font-mono rounded-lg lg:w-[60%] sm:w-[60%]  "> S'inscrire en tant que Professeur </Button>
                    <Button className="bg-slate-800 text-white w-[40%] sm:w-[40%]  text-sm font-mono rounded-lg"> S'inscrire en tant qu'Etudiant </Button>
                </div>
            </div>

            <div className=" lg:w-[50%] xl:w-[50%] 2xl:w-[50%] ">
                <img src="https://img.freepik.com/vecteurs-libre/modele-logo-ecole-education_23-2149713087.jpg?semt=ais_hybrid&w=740&q=80" alt="" className="rounded-xl" />
            </div>

        </div>
    )
}

export default Hero