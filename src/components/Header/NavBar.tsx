import { GraduationCap } from "lucide-react"
import Button from "../utils/Button"
import { Moon , Sun } from "lucide-react"

function NavBar() {
    return (
        <div className="flex flex-row justify-between w-[95%] my-2 mx-auto">

            <div className="flex flex-row gap-2">
                <GraduationCap className="w-8 h-8 dark:text-blue-800" />
                <h1 className=" dark:text-white font-semibold "> EduText </h1>
            </div>
            
            <div className="flex flex-row gap-2">
                <Button className=" dark:text-white border border-0 font-sans bg-slate-800 rounded-xl " >Connexion</Button>
                <Button className=" dark:text-white bg-blue-500 rounded-xl font-sans " >Inscription</Button>     
                
                <div className=" p-2 bg-blue-950 rounded-xl">
                    <Sun className="w-6 h-6 dark:text-white cursor-pointer " />
                </div>

            </div>

        </div>
    )
}

export default NavBar