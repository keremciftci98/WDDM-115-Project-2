import { NavLink, Link } from "react-router-dom";
import logo from '../assets/oscar_winners.svg';
import { FaChevronDown, FaInstagram, FaSpotify } from "react-icons/fa6";

function NavBar() {

    return (
        <header className={`fixed top-0 left-0 right-0 z-10 w-full transition-all py-6 bg-transparent`}>
            <div className="container px-4 mx-auto text-white">
                <div className="flex gap-5 items-center justify-between mx-auto">
                    {/* menu */}
                    <nav className="flex items-center  gap-5 justify-around">
                        <NavLink to="/" className="hover:text-gray-200">Home</NavLink>
                        <NavLink to="/twenty-four" className="hover:text-gray-200">2024</NavLink>
                        <NavLink to="/twenty-three" className="hover:text-gray-200">2023</NavLink>
                        <div className="relative group">
                            <div className="flex gap-2 justify-center items-center hover:text-gray-200 cursor-pointer">
                                <span>Archives</span>
                                <FaChevronDown />
                            </div>
                            <ul className="absolute left-0 right-0 hidden group-hover:block bg-white border rounded-md shadow-lg">
                                <li className="hover:bg-slate-400/20">
                                    <NavLink
                                        to="/archives/2022"
                                        className="block px-4 py-2 text-gray-600 hover:text-gray-700"
                                    >
                                        2022
                                    </NavLink>
                                </li>
                                <li className="hover:bg-slate-400/20">
                                    <NavLink
                                        to="/archives/2021"
                                        className="block px-4 py-2 text-gray-600 hover:text-gray-700"
                                    >
                                        2021
                                    </NavLink>
                                </li>
                                <li className="hover:bg-slate-400/20">
                                    <NavLink
                                        to="/archives/2020"
                                        className="block px-4 py-2 text-gray-600 hover:text-gray-700"
                                    >
                                        2020
                                    </NavLink>
                                </li>
                                <li className="hover:bg-slate-400/20">
                                    <NavLink
                                        to="/archives/2019"
                                        className="block px-4 py-2 text-gray-600 hover:text-gray-700"
                                    >
                                        2019
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* logo */}
                    <a href="/" className="col-span-4 mx-auto"><img src={logo} alt="logo" /><span className="hidden">Home</span></a>
                    {/* Social icons */}
                    <div className="hidden col-span-4 md:flex space-x-5 items-stretch">
                        <Link className="hover:text-gray-200" href="#">
                            <FaSpotify className="h-6 w-6" />
                        </Link>
                        <Link className="flex items-center hover:text-gray-200" href="#">
                            <FaInstagram className="h-6 w-6" />
                        </Link>
                    </div>


                </div>
            </div>
        </header>
    );
}

export default NavBar;
