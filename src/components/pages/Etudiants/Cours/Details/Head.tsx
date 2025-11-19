import Button from "@/components/utils/Button"


function Head() {
    return (
        <>
            <div className=" flex flex-col gap-3 w-[70%] mx-auto  ">

                <div className=" flex flex-row justify-between ">
                    <div className=" flex flex-col gap-2 ">
                        <h2 className=" font-bold text-3xl  "> Mathematiques Avancées </h2>
                        <div className=" flex flex-row gap-3 items-center  ">
                            <p className=" text-gray-500 text-lg font-medium "> Terminale S1 </p>
                            <p className=" font-medium text-sm border border-green-600 p-1 bg-green-300 text-green-900 rounded-full "> En cours </p>
                        </div>
                    </div>

                    <div>
                        <Button className=" bg-gray-200 p-2 rounded-xl " > Modifier le cours </Button>
                    </div>
                </div>

                <div className=" flex flex-col gap-3 p-4 shadow-sm border border-gray-200 rounded-xl">

                    <h2 className=" font-bold  text-base-content text-xl "> Progresseion Globale </h2>
                    <div className=" flex flex-row justify-between  ">
                        <p className=" text-base-content font-medium leading-normal "> Heures compètées </p>
                        <p className=" text-sm font-semibold leading-normal text-gray-800 "> 32h/60 </p>
                    </div>
                    <div className=" progress bg-blue-500 w-full h-2.5 "></div>
                    <p> Temps restant  estimé: 28h </p>

                </div>

            </div>
        </>
    )
}

export default Head