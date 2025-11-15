import Button from "../utils/Button"
import { Backpack } from "lucide-react"

function NotFound() {
    return (
        <div className="flex flex-col h-screen items-center justify-center space-y-5">
            <h1 className="text-9xl text-slate-800 font-bold dark:text-white"> 404 </h1>

            <div className=" flex flex-col items-center justify-center space-y-1 ">
                <h1 className=" text-2xl text-slate-800 font-bold dark:text-white leading-tight "> Oops! Page Not Found </h1>
                <p className="text-slate-800  dark:text-slate-400 leading-normal "> We can't seem to find the page you are looking for. </p>
            </div>

            <div className=" flex items-center justify-center ">
                <Button className=" font-mono bg-blue-700 rounded-xl transition duration-700 ease-in-out " > <Backpack className=" w-5 h-5 animate-bounce " /> Return to Dashboard </Button>
            </div>
        </div>
    )
}

export default NotFound