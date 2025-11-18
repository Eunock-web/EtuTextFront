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
                <div className=" flex flex-row justify-between gap-5">
                    <div className="flex flex-col space-y-2">
                        <h1 className={titreClassName}> {titreCours} </h1>
                        <p className={profClassName}> Prof. {nomProf} </p>
                    </div>

                    <div className={" grid grid-col-1 sm:grid-col-2  gap-1 " + boutonDivClassName}>
                        <Button className={bouton1ClassName}> {classeTitre} </Button>
                        <Button className={bouton2ClassName}> {coursStatus} </Button>
                    </div>
                </div>
                <div className=" flex flex-col space-y-2 ">
                    <h3 className=" font-semibold text-lg  "> 45h faites sur 60h </h3>
                    <div className=" progress text-primary "></div>
                    <p className=" text-gray-400  "> Prochaine session: 25 Oct, 10:00 </p>
                </div>

                <div className=" flex flex-row justify-between ">
                    <p className=" font-xl font-semibold "> Notions abordées </p>
                    <p> Voir Plus </p>
                </div>
            </div>
        </>
    )
}

export default ListCard