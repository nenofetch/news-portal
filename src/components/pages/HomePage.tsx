import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Navigation from "../Navigation/Navigation"

function HomePage() {
    return(
        <div>
            <Header/>
            <Navigation/>
            <div className="container">
                <h2>Coming Soon ...</h2>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage