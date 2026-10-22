import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaFileInvoice, FaHome, FaPhoneAlt, FaRssSquare, FaSuitcase, FaUser, FaUserGraduate } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';
import { ThemeToggle } from './ThemeToggle'; // <--- Importamos el botón de tema

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
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>{/* Menu Desktop */}
            <div className='bg-[#0f172a] hidden md:flex fixed left-0 top-0 w-[85px] h-full flex-col justify-between z-20'>
                <div>
                    {/* Logo */}
                    <div className='text-center pt-4 text-4xl font-bold text-[#dfa400]'>
                        <h1>WH</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className='flex-col pt-4 text-white text-2xl'>
                        {menuMob.map(item => (
                            <li
                                key={item.id}
                                className='p-6 cursor-pointer duration-300 hover:text-[#dfa400] border-gray-50 border-b-[1px] flex justify-center'
                            >
                                <Link to={item.url}>{item.opcion}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Controles de Idioma y Tema en Escritorio (abajo) */}
                <div className='p-3 flex flex-col items-center gap-3 pb-6'>
                    <LanguageSelector />
                    <ThemeToggle />
                </div>
            </div>

            {/* Menu Mobile */}
            <div className='md:hidden fixed right-5 top-5 z-20 w-[85px] h-[80px] bg-[#dfa400] text-white rounded-full shadow-lg'>
                <div onClick={handleNav} className='block md:hidden p-4 cursor-pointer flex justify-center items-center h-full'>
                    {nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
                </div>
                {nav && (
                    <div className='bg-[#0f172a] fixed left-0 top-0 w-[85px] h-full flex flex-col justify-between transition-opacity duration-500 ease-in-out opacity-100 z-10'>

                        <div>
                            {/* Logo */}
                            <div className='text-center pt-4 text-4xl font-bold text-[#dfa400]'>
                                <h1>WH</h1>
                            </div>

                            <ul className='flex-col pt-4 text-white text-2xl'>
                                {menuMob.map(item => (
                                    <li
                                        key={item.id}
                                        className='p-6 cursor-pointer duration-300 hover:text-[#dfa400] border-gray-50 border-b-[1px] flex justify-center'
                                    >
                                        <Link to={item.url} onClick={handleNav}>{item.opcion}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Controles de Idioma y Tema en Móvil (abajo) */}
                        <div className='p-3 flex flex-col items-center gap-3 pb-6'>
                            <LanguageSelector />
                            <ThemeToggle />
                        </div>

                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;