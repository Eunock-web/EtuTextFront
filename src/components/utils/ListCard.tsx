import Button from "./Button"

interface ListeCoursInterface{
    titreCours: string,
    nomProf: string,
    classeTitre: string,
    coursStatus: string    
    boutonDivClassName?: string,
    bouton1ClassName?: string,
    bouton2ClassName?: string,
    titreClassName?: string,
    profClassName?: string,
    cardClassName?: string
}

function ListCard({titreCours, nomProf, boutonDivClassName, bouton1ClassName, bouton2ClassName, titreClassName, classeTitre, coursStatus, profClassName, cardClassName}: ListeCoursInterface){
    return (
        <>
            <div className={cardClassName}>
                <div className=" flex flex-row justify-between ">
                    <div className="flex flex-col space-y-2">
                        <h1 className={titreClassName}> {titreCours} </h1>
                        <p className={profClassName}> Prof. {nomProf} </p>
                    </div>

                    <div className={" flex flex-row gap-2 " + boutonDivClassName}>
                        <Button className={bouton1ClassName}> {classeTitre} </Button>
                        <Button className={bouton2ClassName}> {coursStatus} </Button>
                    </div>
                </div>
                <div>
                    <h1 className=" font-semibold  "> 45h faites sur 60h </h1>
                    <p className=" text-gray-400  "> Prochaine session: 25 Oct, 10:00 </p>
                </div>

                <div className=" flex flex-row justify-between ">
                    <h2 className=" font-semibold text-xl dark:text-white "> Notions abordées </h2>
                    <p> Voir Plus </p>
                </div>
            </div>
        </>
    )
}

export default ListCard