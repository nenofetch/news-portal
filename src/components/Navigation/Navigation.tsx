import {NavLink, Link} from "react-router-dom"


function Navigation() {
    return(
        <nav className="flex justify-center ">
            <ul >
                <Link className="p-4 current: text-stone-800 hover:bg-gray-300" to={"/"}>Home</Link>
                <Link className="p-4 hover:bg-gray-300" to={"/About"}>About</Link>
                <Link className="p-4 hover:bg-gray-300" to={"/Contact"}>Contact</Link>
                <div className="p-4 md:justify-items-end">
                    <input type="text" placeholder="Cari Berita" className="md:justify-between border-gray-300 shadow appearance-none border rounded py-2 px-3 text-gray-70 leading-tight focus:outline-none focus:shadow-outline"/>
                    <button type="submit" className="align-items-center ml-3 shadow border border-spacing-2">Search</button>
                </div>
            </ul>
            
        </nav>
    )
}

export default Navigation