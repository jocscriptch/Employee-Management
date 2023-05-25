import { BsBusFrontFill } from 'react-icons/bs';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { FaUsers, FaSearch } from 'react-icons/fa';
import { BiLogOutCircle } from "react-icons/bi";

import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="flex-row lg:flex">
            <div className="flex flex-col w-full p-3 bg-primary text-white shadow lg:h-screen lg:w-72">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <Link
                            href="/"
                           className="flex items-center p-2 space-x-2 rounded-md ml-2"
                        >
                            <BsBusFrontFill className="w-6 h-6" />
                            <span>Employee Management</span>
                        </Link>


                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                                type="submit"
                                className="p-2 focus:outline-none focus:ring"
                            >
                                <Link
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <FaSearch className="w-6 h-6 text-third" />
                                </Link>
                            </button>

                        </span>
                        <input
                            type="search"
                            name="Search"
                            placeholder="Buscar..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none text-black"
                        />

                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <FaUsers className="w-6 h-6" />
                                    <span>Empleados</span>
                                </Link>

                            </li>
                            <li className="rounded-sm">
                                <Link
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <HiBuildingOffice2 className="w-6 h-6" />
                                    <span>Departamentos</span>
                                </Link>

                            </li>

                            <li className="rounded-sm">
                                <Link
                                    href="/" passHref
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <BiLogOutCircle className="w-6 h-6" />
                                    <span>Salir</span>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}