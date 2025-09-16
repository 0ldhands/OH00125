import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className="sm:flex sm:justify-between m-2 sm:m-5 pb-2 border-b-1 border-gray-300">
        <div className="flex items-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-violet-800">GNANA SEKAR</h1>
        </div>
        <div className="sm:mt-0 mt-2 flex justify-end sm:mr-10 items-center">
            <nav>
                <ul>
                    <li className="inline-block ml-5 sm:ml-20"><Link to="/">Home</Link></li>
                    <li className="inline-block  ml-5 sm:ml-20"><Link to="/About">About</Link></li>
                    <li className="inline-block  ml-5 sm:ml-20"><button onClick="/Contact" className="bg-violet-800 text-white p-1 sm:p-2 rounded-sm hover:bg-violet-500">Contact</button></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header