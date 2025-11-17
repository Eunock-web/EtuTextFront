import { GraduationCap, Sun } from "lucide-react"
import Button from "../utils/Button"

function NavBar() {
    return (
        <div className="flex flex-row justify-between w-[95%] my-2 mx-auto">

            <div className="flex flex-row gap-2 hover:cursor-pointer">
                <GraduationCap className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                <h1 className="text-black dark:text-white font-semibold"> EduText </h1>
            </div>

            <div className="flex flex-row gap-2">
                <Button className=" bg-slate-100 text-blue-950 dark:bg-blue-900 dark:text-white border-0 font-sans rounded-xl">
                    Connexion
                </Button>
                <Button className="bg-blue-500 text-white  dark:bg-blue-600 dark:text-white rounded-xl font-bold text-sm leading-normal">
                    Inscription
                </Button>

                <div className="p-2 bg-slate-200 dark:bg-slate-800 rounded-xl">
                    <Sun className="w-6 h-6 text-slate-800 dark:text-white cursor-pointer" />
                </div>

            </div>

        </div>
    )
}

export default NavBar