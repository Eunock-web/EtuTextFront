import Input from "./Input"
import Button from "./Button"

function AddCoursCard(){
    return(
        <>
            <div className=" flex flex-col space-y-4 p-4  rounded-xl w-full border border-gray-200 shadow-xl   ">
                <div className=" flex flex-col space-y-2 ">
                    <h1 className="  font-semibold text-lg  "> Rejoindre un cours  </h1>
                    <p className=" text-gray-500 text-sm  "> Entrez le code d'intégration fourni par votre professeur pour envoyer une demande d'accès. </p>    

                    <div className=" grid grid-col-1 sm:grid-col-2 lg:grid-col-2 gap-2 ">
                        <Input type="text" name="code" placeholder="Entrez le code du cours..." id="code" className=" p-2 rounded-lg  dark:border-slate-400 w-full bg-gray-100 " />
                        <div className=" ">
                            <Button className=" bg-primary/70  rounded-xl text-white  "> Demander l'accès </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCoursCard