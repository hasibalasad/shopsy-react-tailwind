import Logo from "../../assets/logo.png"
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services"
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#"
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#"
    },
    {
        id: 5,
        name: "Electronics",
        link: "/#"
    }
]

const DropdownLinks = [
    {
        id: 1,
        name: "Best Sellers",
        link: "/#"
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#"
    },
    {
        id: 3,
        name: "New Arrivals",
        link: "/#"
    }
]

function Navbar() {
    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white relative z-10">
            {/* Upper section of navbar */}
            <div className="bg-primary/40 py-2">
                <div className=" container flex justify-between items-center">
                    <div>
                        <a href="" className="flex gap-2 items-center text-2xl sm:text-3xl font-bold">
                            <img src={Logo} alt="Logo" className="w-10 " />
                            Shopsy
                        </a>
                    </div>
                    {/* search bar */}
                    <div className="flex items-center gap-4">

                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] border border-gray-300 transition-all duration-300 rounded-full px-2 py-1 focus:outline-none focus:border-primary dark:bg-gray-800 dark:border-gray-500" />
                            <IoMdSearch className=" text-gray-500 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2" />
                        </div>

                        {/* order button */}
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full group flex gap-3 items-center ">
                                <span className="hidden group-hover:block transition-all duration-200">
                                    Order
                                </span>
                                <FaCartShopping className="text-xl text-white drop-shadow-lg" />
                            </button>
                        </div>

                        <DarkMode />
                    </div>
                </div>


            </div>

            {/* Lower section of navbar */}
            <div className="flex justify-center ">
                <ul className="flex items-center gap-4">
                    {
                        Menu.map((item) => (
                            <li key={item.id} >
                                <a
                                    href={item.link}
                                    className=" inline-block px-4 py-2 hover:text-primary transition-all duration-300">{item.name}</a>
                            </li>

                        ))
                    }
                    {/* dropdown menu */}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-[2px] py-2">
                            Trending Items
                            <span className="group-hover:rotate-180 transition-all duration-300">
                                <FaCaretDown />
                            </span>
                        </a>
                        <div className="absolute hidden z-50 group-hover:block bg-white dark:bg-gray-900 rounded-md shadow-md w-[200px] p-2 transition-all duration-300">
                            <ul>
                                {DropdownLinks.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20">{item.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
