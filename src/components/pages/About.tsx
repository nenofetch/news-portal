import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"
import Footer from "../Footer/Footer"

function About() {
    return(
        <div>
            <Header/>
            <Navigation/>
            <div className="container">
            <h2 className="text-center text-2xl">News Apps</h2>
            <p className="text-center justify-center">Project ini dibuat menggunakan Vite, React JS, Tailwind CSS</p>
            </div>
            
            <Footer/>
        </div>
    )
}

export default About