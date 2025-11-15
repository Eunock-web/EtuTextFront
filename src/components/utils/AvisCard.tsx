

function AvisCard() {
    return (
        <div className=" flex flex-col p-4 space-y-3 border bg-gray-800 border-gray-800 rounded-lg shadow-2xl w-[30%]  ">    
            <p className=" text-gray-400 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, perferendis. Iste cupiditate nisi maiores vitae quaerat aperiam</p>
            
            <div className="flex flex-row gap-2 justify-start">
                <div>
                    <img src="https://img.freepik.com/vecteurs-libre/modele-logo-ecole-education_23-2149713087.jpg?semt=ais_hybrid&w=740&q=80" alt="" className=" w-10 h-10 rounded-full " />
                </div>

                <div className=" flex flex-col -space-y-1 ">
                    <h2 className=" font-semibold  "> Dr. Alan Grant </h2>
                    <p className=" text-gray-400  "> Professeur d'université </p>
                </div>
            </div>
        </div>
    )
}

export default AvisCard