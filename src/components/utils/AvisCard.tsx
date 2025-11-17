
interface AvisCardProps {
    avis : string,
    profName : string,
    role : string,
    profil : string
}

function AvisCard({ avis, profName, role, profil } : AvisCardProps) {
    return (
        <div className=" flex flex-col p-4 space-y-3 border bg-gray-800 border-gray-800 rounded-lg shadow-sm w-[30%]  ">    
            <p className=" text-gray-400 ">{ avis }</p>
            
            <div className="flex flex-row gap-2 justify-start">
                <div>
                    <img src={ profil } alt="" className=" w-10 h-10 rounded-full " />
                </div>

                <div className=" flex flex-col -space-y-1 ">
                    <h2 className=" font-semibold  "> { profName } </h2>
                    <p className=" text-gray-400  "> { role } </p>
                </div>
            </div>
        </div>
    )
}

export default AvisCard