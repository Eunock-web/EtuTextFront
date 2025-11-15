import Hero from "./components/Header/Hero";
import Main from "./components/main/Main";
import NavBar from "./components/Header/NavBar";
import CallBack from "./components/main/CallBack";
import Avis from "./components/main/Avis";
import PreFooter from "./components/Footer/PreFooter";
import Footer from "./components/Footer/Footer";

function App(){
    return (
    <div className="flex flex-col space-y-9">
      <NavBar />
      <Hero />
      <Main />
      <CallBack />
      <Avis />
      <hr className=" text-gray-400 w-[70%] mx-auto " />
      <PreFooter />
      <hr className=" text-gray-400 w-[70%] mx-auto " />
      <Footer />
    </div>
        )
}

export default App;