import { Twitter, Linkedin, Facebook } from "lucide-react"


function Footer() {
    return (
        <div className=" w-[70%] mx-auto mb-5 flex flex-row justify-between ">
            <div>
                <p className=" dark:text-gray-400 text-sm  ">© 2025 EduText. Tous droits réservés.</p>
            </div>

            <div className=" flex flex-row gap-2 ">
                <Twitter className="w-7 h-7  text-gray-800 rounded-full p-1 dark:text-gray-400"/>
                <Linkedin className="w-7 h-7  bg-gray-400 rounded-xl p-1 dark:text-slate-700"/>
                <Facebook className="w-7 h-7  bg-gray-400 rounded-full p-1 dark:text-slate-700"/>
            </div>
        </div>
    )
}

export default Footer