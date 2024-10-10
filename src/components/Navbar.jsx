import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaFileInvoice, FaHome, FaPhoneAlt, FaRssSquare, FaSuitcase, FaUser, FaUserGraduate } from "react-icons/fa";
/* import menu from "../data/menuOption.json"; */
import { Link } from 'react-router-dom';


const menuMob = [
    {
        id: "1",
        url: "/",
        opcion: <FaHome />
    },
    {
        id: "2",
        url: "/about",
        opcion: <FaUser />
    },
    {
        id: "3",
        url: "/experience",
        opcion: <FaFileInvoice />
    },
    {
        id: "4",
        url: "/education",
        opcion: <FaUserGraduate />
    },
    {
        id: "5",
        url: "/projects",
        opcion: <FaSuitcase />
    },
    {
        id: "6",
        url: "/blog",
        opcion: <FaRssSquare />
    },
    {
        id: "7",
        url: "/contact",
        opcion: <FaPhoneAlt />
    }
]

const Navbar = () => {
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items


    return (
        <>{/* Menu Destop */}
            <div className='bg-[#0f172a] hidden md:block fixed left-0 top-0 w-[85px] h-full'>
                {/* Logo */}
                <div className='text-center pt-4 text-4xl font-bold text-[#dfa400]'>
                    <h1>WH</h1>
                </div>

                {/* Desktop Navigation */}
                <ul className='flex-col pt-4 text-white md:flex text-2xl '>
                    {menuMob.map(item => (
                        <li
                            key={item.id}
                            className='p-6   cursor-pointer duration-300 hover:text-[#dfa400] border-gray-50 border-b-[1px]'
                        >
                            <Link to={item.url}>{item.opcion}</Link>
                        </li>
                    ))}
                </ul>


            </div>
            {/* Menu Mobile */}
            <div className='md:hidden fixed right-5 top-5 z-10  w-[85px] h-[80px]  bg-[#dfa400] text-white rounded-full'>
                <div onClick={handleNav} className='block md:hidden p-4'>
                    {nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
                </div>
                {nav && (
                    <div className={`bg-[#0f172a] fixed left-0 top-0 w-[85px] h-full transition-opacity duration-500 ease-in-out ${nav ? 'opacity-100 ' : 'opacity-0'}`}>

                        {/* Logo */}
                        <div className='text-center pt-4 text-4xl font-bold text-[#dfa400]'>
                            <h1>WH</h1>
                        </div>

                        
                        <ul className='flex-col pt-4 text-white md:flex text-2xl '>
                            {menuMob.map(item => (
                                <li
                                    key={item.id}
                                    className='p-6   cursor-pointer duration-300 hover:text-[#dfa400] border-gray-50 border-b-[1px]'
                                >
                                    <Link to={item.url} onClick={handleNav}>{item.opcion}</Link>
                                </li>
                            ))}
                        </ul>


                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;