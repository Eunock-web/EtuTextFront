
import AvisCard from "../utils/AvisCard"

const AvisList = [
    {
        id : 1,
        avis: " \" EduText a complètement transformé ma gestion de cours. Les outils de planification intuitifs et le suivi de la progression m'ont fait gagner des heures de travail administratif. \" ",
        profName: " Dr. Alan Grant ",
        role: " Professeur d'université ",
        profil: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpBeSz_y1S1lsWIgsqV11FcRcK7Uz-eCyOF5VNvdAVRXP1d4hKwL4SKGL-_8FS9AB6G542nNmxRWVgpm4OspS-vuvp7TWvPX72SGHokIqweDIrX4lNkJSCAsnCPIjTtD2nU1BS6Uc98NydStcOE5QshcBhvJpWDi328nMv1Qn_eMiZW9XeZuCtt04lnMaqvoc8dnT3Z5M0zfmGqe0k4WTDiQDD1RmxohIGVcJGt9k8zX7aCM5pHG_Nb7vFRBxx4jS-grYM1NRqDus"
    },
    {
        id : 2,
        avis: " \" En tant qu'étudiant, avoir tous mes manuels, notes et discussions en un seul endroit change la donne. Les fonctionnalités interactives rendent l'apprentissage beaucoup plus engageant. \" ",
        profName: " Ellie Sattler ",
        role: " Etudiant diplômé ",
        profil: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYAWaMXcIjzz6_MED8WHdXb0OSON6Utc_o0XJUwXdQAhu9bZ7GgbMKQOV5cU-NfkWJTxqx_pDmLK2hm84n-6HTbBabFG_S5jvMUoFsF2YoLLsY0YsEl-ia3CK8PFSLPSFJNr417Uq3BCTltTTVXPf0yorQS2hm3B2SQwHLRpV79kCRQyTPSNw4Cj3BS6r3KPqTr8zshQsvjInHzp8DXJ4B_sGPG74xyuMBfOd6gpxIm38DpLhoRRCO9MST3UAk0zW-JmJTSYbvgwg"
    }
]

function Avis() {
    return (
        <div className=" flex flex-col items-center justify-center space-y-5 ">
            <h1 className=" font-bold text-3xl dark:text-white  "> Apprécié par les Etudiants et les Educateurs </h1>
            
            <div className=" flex flex-row items-center justify-center gap-5 ">
                {AvisList.map((item) => (
                    <AvisCard
                        key={item.id}
                        avis={item.avis}
                        profName={item.profName}
                        role={item.role}
                        profil={item.profil}
                    />
                ))}
            </div>
        </div>
    )
}

export default Avis