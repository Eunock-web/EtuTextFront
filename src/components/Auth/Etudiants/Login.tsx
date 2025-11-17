import Button from "../../utils/Button"
import Input from "../../utils/Input"
import { Mail, Lock, Github, EyeIcon } from "lucide-react"


interface LoginINterface {
    image: string,
    authName: string,

}

function Login({ image, authName }: LoginINterface) {
    return (
        <div className=" flex flex-row gap-3 justify-center items-center h-screen  ">

            <div className=" flex flex-col p-4  bg-slate-800 border border-slate-600 rounded-xl w-[40%] ">
                <img src={image || "https://img.freepik.com/vecteurs-libre/modele-logo-ecole-education_23-2149713087.jpg?semt=ais_hybrid&w=740&q=80"} alt="" className=" rounded-xl " />
            </div>


            <div className=" flex flex-col space-y-5  border border-slate-600 rounded-xl p-6 w-[40%] h-[80%] justify-center ">

                <div>
                    <h2 className=" dark:text-white font-bold text-xl text-center "> Digital Textbook </h2>
                </div>

                <div className=" flex flex-col  ">
                    <h1 className=" dark:text-slate-800 font-bold text-xl text-center "> {authName || "Student Sign In"} </h1>
                    <p className=" text-gray-400 "> Welcome back! Please enter your details to sign in </p>
                </div>

                <div className=" flex flex-col ">

                    <form action="" className=" flex flex-col space-y-5">
                        <div className=" flex flex-col space-y-2  ">
                            <label htmlFor="email"> School Email </label>
                            <div className=" flex flex-row p-3 border border-slate-600 rounded-xl gap-2 w-full " >
                                <Mail className=" w-5 w-5 text-gray-400 " />
                                <Input type="email" name="email" placeholder="Enter your school email " id="email" className=" w-full border border-0  " />
                            </div>
                        </div>

                        <div className=" flex flex-col space-y-2 ">
                            <label htmlFor="password"> Password </label>
                            <div className=" flex flex-row p-3 border border-slate-600 rounded-xl w-full justify-between" >
                                <div className="flex flex-row gap-2">
                                    <Lock className=" w-5 w-5 text-gray-400 " />
                                    <Input type="password" name="password" placeholder="Enter your password" id="password" className=" border border-0 w-full " />
                                </div>
                                <EyeIcon className=" w-5 w-5 text-gray-400 justify-end " />
                            </div>
                        </div>

                        <div>
                            <Button className=" bg-blue-800 dark:text-white p-2 dark:bg-blue-500 w-full rounded-lg "> Sign In </Button>
                        </div>

                        <p className=" text-gray-400 text-center"> Or continue with </p>

                        <div className=" flex flex-row justify-center gap-2 ">
                            <div className=" flex flex-row gap-2 ">
                                <Button className=" text-white rounded-lg  "> <Github className=" w-5 w-5 text-white " /> Google</Button>
                            </div>
                            <div className=" flex flex-row gap-2 ">
                                <Button className=" text-white rounded-lg " > <Github className=" w-5 w-5 text-white " /> GitHub</Button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login
