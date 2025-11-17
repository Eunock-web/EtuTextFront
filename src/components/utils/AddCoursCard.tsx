import Input from "./Input"
import Button from "./Button"

function AddCoursCard(){
    return(
        <>
            <div className=" flex flex-col space-y-4 p-4 border border-slate-600 rounded-xl bg-slate-800 ">
                <div className=" flex flex-col space-y-2 ">
                    <h1 className=" text-white font-bold text-xl "> Rejoindre un cours  </h1>
                    <p className=" text-gray-400  "> Entrez le code d'intégration fourni par votre professeur pour envoyer une demande d'accès. </p>
                </div>

                <div className=" flex flex-row gap-2 bg-slate-800 p-2 ">
                    <Input type="text" name="code" placeholder="Entrez le code du cours..." id="code" className=" p-2 rounded-lg border border-slate-600 dark:border-slate-400  " />
                    <Button className=" bg-blue-500 dark:text-white  p-5 dark:bg-blue-400 rounded-lg "> Demander l'accès </Button>
                </div>
            </div>
        </>
    )
}

export default AddCoursCard