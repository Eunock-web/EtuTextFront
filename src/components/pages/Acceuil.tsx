import PreFooter from "../Footer/PreFooter"
import Hero from "../Header/Hero"
import CallBack from "../main/CallBack"
import Main from "../main/Main"
import Avis from "../main/Avis"
import Footer from "../Footer/Footer"
import NavBar from "../Header/NavBar"

function Acceuil(){
    return (
        <>
            <div className=" flex flex-col space-y-20 ">
                <NavBar />
                <Hero />
                <Main />
                <CallBack />
                <Avis />
                <hr className=" w-[75%] mx-auto my-5 border-slate-800 " />
                <div className=" flex flex-col space-y-8 ">
                    <PreFooter />
                    <hr className=" w-[75%] mx-auto my-5 border-slate-800 " />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Acceuil