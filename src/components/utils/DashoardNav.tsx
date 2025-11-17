import { Notebook, Sun } from "lucide-react"


function DashboardNav() {
    return (
        <nav>
            <div className=" flex flex-row-reverse gap-2 ">
                <div>
                    <Notebook size={20} />
                </div>
                <div>
                    <Sun className="w-5 h-5 dark:text-white cursor-pointer " />
                </div>
            </div>
        </nav>
    )
}

export default DashboardNav