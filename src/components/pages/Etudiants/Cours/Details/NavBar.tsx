import { BookOpen } from "lucide-react"

const NavList = [

    {
        id: 1,
        link : 'Dashboard'
    },
    
    {
        id: 2,
        link : "Courses"
    },

    {
        id: 3,
        link: "Students"
    },

]

function NavBar() {
    return (
        <>
            <nav className=" flex flex-row justify-between  ">
                <div className=" flex flex-row gap-4 ">

                    <div className=" flex flex-row gap-2 ">
                        <BookOpen className=" w-8 h-8  text-blue-800 " />
                        <h1 className=" text-base-content font-bold text-xl "> Digital TextBook </h1>
                    </div>

                    <ul className=" flex flex-row gap-2 ">
                        {NavList.map((item) => (
                            <li key={ item.id }> <a href=""> {item.link} </a> </li>
                        )) }    
                    </ul>

                </div>

                <div className=" flex flex-row gap-3 ">

                    <div className=" border border-gray-200 p-2 rounded-xl ">
                        
                    </div>

                    <div className=" border border-gray-200 p-2 rounded-xl ">

                    </div>

                    <div className=" border border-gray-200 p-2 rounded-xl ">

                    </div>


                </div>
                
            </nav>
        </>
    )
}

export  default NavBar