import { Twitter, Linkedin, Facebook } from "lucide-react"


function Footer() {
    return (
        <div className=" w-[70%] mx-auto flex flex-row justify-between ">
            <div>
                <p className=" dark:text-gray-400  ">© 2025 EduText. Tous droits réservés.</p>
            </div>

            <div className=" flex flex-row gap-2 ">
                <Twitter className="w-10 h-10 border border-gray-800 bg-gray-800 rounded-2xl p-2 dark:text-gray-400"/>
                <Linkedin className="w-10 h-10 border border-gray-800 bg-gray-800 rounded-2xl p-2 dark:text-gray-400"/>
                <Facebook className="w-10 h-10 border border-gray-800 bg-gray-800 rounded-2xl p-2 dark:text-gray-400"/>
            </div>
        </div>
    )
}

export default Footer