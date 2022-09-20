import { Link} from "react-router-dom"
function Footer() {
    return(
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-80 sm: items-center">
            <span className="text-slate-400 text-sm sm:text-center dark:text-gray-40">© 2022 <a href="#!" className="hover: underline align-middle">News Portal</a>. All Right Reserved</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <Link className="mr-4 hover:underline md:mr-6" to="/about">About</Link>
                <Link className="mr-4 hover:underline md:mr-6" to="/privacy-policy">Privacy Policy</Link>
                <Link className="mr-4 hover:underline md:mr-6" to="/contact">Contact</Link>
            </ul>
        </footer>
    )
}

export default Footer