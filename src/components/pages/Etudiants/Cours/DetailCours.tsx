import Head from "./Details/Head";
import NavBar from "./Details/NavBar";


function DetailCours() {
    return (
        <>
            <div className=" flex flex-col gap-3 w-[95%] mx-auto my-3">
                <NavBar />
                <Head  />
            </div>
        </>
    )
}

export default DetailCours