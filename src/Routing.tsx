import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./components/pages/HomePage"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"


function Routing() {
    return(
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/About" element={<About/>}></Route>
                    <Route path="/Contact" element={<Contact/>}></Route>
                </Routes>
            </Router>
    )
}

export default Routing