import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import CardNews from "./news/CardNews"
import Navigation from "../Navigation/Navigation"
import CarouselSlide from "./news/CarouselSlide"

function HomePage() {
    return (
        <>
            <Header />
            <Navigation />
            {/* <CarouselSlide /> */}
            <CardNews />
            <Footer />
        </>
    )
}

export default HomePage