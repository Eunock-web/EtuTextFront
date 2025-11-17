import AddCoursCard from "../../../utils/AddCoursCard"
import ListCard from "../../../utils/ListCard"

function Cours(){
    return (
        <>
            <div className=" flex flex-col space-y-5 items-center ">
                <AddCoursCard  />

                <ListCard titreCours="Mathématiques" nomProf="Mme. Dupont" boutonDivClassName="" bouton1ClassName="   " bouton2ClassName="" titreClassName="" classeTitre="" coursStatus=" En cours " profClassName="" cardClassName=" p-5 border border-slate-600 rounded-xl bg-slate-800 w-[25%]  " />
            </div>
        </>
    )
}

export default Cours