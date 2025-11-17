import { ChevronFirst, MoreVertical } from "lucide-react"

interface SideBarInterface {
    children : any
}

function SideBar( { children }: SideBarInterface ) {
    return (
        <aside className=" h-screen  ">
            <nav className=" h-full flex flex-col  border-r border-gray-700 shadow-lg  ">
                <div className=" p-4 pb-2 flex justify-between items-center  ">
                    <div className=" flex flex-row gap-2 ">
                        <img src="src\images\universite.jpg" alt="" className=" w-10 h-10 rounded-full  " />
                        <div>
                            <h1 className=" text-white font-semibold text-xl "> Edith Piaf </h1>
                            <p className=" text-gray-400 "> Enseignant </p>
                        </div>
                    </div>
                    <button className=" p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer ">
                        <ChevronFirst className=" w-5 h-5 text-black " />
                    </button>
                </div>
                <ul className=" flex-1 px-3  ">
                    {children}
                </ul>

                <div className=" border-t border-gray-700 flex flex-row p-3 ">   
                    <img src="src\images\universite.jpg" alt="" className=" w-10 h-10 rounded-md  " />

                    <div className={` flex justify-between items-center w-52 ml-3 `}>
                        <div className=" leading-4 ">
                            <h4 className=" font-semibold dark:font-bold dark:text-lg "> John Doe </h4>
                            <span className="text-xs text-black dark:text-white "> Professeur </span>
                        </div>
                        <div>
                            <MoreVertical size={ 20 } />
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default SideBar

interface SideBarItemInterface{
    icon: any,
    text?: string,
    active?: boolean,
    alert?:any
}
export function  SideBarItem( { icon, text, active, alert } : SideBarItemInterface){
    return (
        <li className= {` text-white relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors ${ active ? " bg-gradient-to-tr from-slate-700 to-slate-800 text-blue-900 " : "hover:bg-blue-600 hover:text-slate-700 hover:font-medium hover:text-lg " } `} >
            {icon}
            <span className=" w-52 ml-3 "> {text} </span>
            {alert && (<div className={` absolute right-2 w-2 h-2 rounded bg-blue-400 `} /> )}
        </li>
    )
}