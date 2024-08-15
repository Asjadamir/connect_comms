import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="shadow bg-neutral-800 block px-3">
            <div className="container mx-auto py-4">
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3"
                    >
                        <img
                            src="logo-black.png"
                            className="h-12"
                            alt="Flowbite Logo"
                        />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link
                                to="/"
                                className="hover:underline me-4 md:me-6"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/Services"
                                className="hover:underline me-4 md:me-6"
                            >
                                Services
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
                    © 2023{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Flowbite™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
