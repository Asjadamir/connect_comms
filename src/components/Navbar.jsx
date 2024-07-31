import React, { useState } from "react";
import { RiMenuFold2Fill, RiMenuFoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
    let hideMenu = () => setmenu(false);
    const [menu, setmenu] = useState(false);
    return (
        <div className="py-3 sticky top-0 shadow-md backdrop-blur-lg z-50">
            <div className="container mx-auto flex items-center justify-between w-11/12 sm:w-full">
                <div id="logo">
                    <img src="logo.png" alt="LOGO" className="h-12" />
                </div>

                <div id="menu_logo" onClick={() => setmenu(!menu)}>
                    {menu ? (
                        <RiMenuFold2Fill className="text-3xl transition-all" />
                    ) : (
                        <RiMenuFoldFill className="text-3xl transition-all" />
                    )}
                </div>

                <div id="menu" className={!menu ? "translate-x-full" : ""}>
                    <Link to="/" className="menu-link" onClick={hideMenu}>
                        Home
                    </Link>

                    <Link
                        to="/services"
                        className="menu-link"
                        onClick={hideMenu}
                    >
                        Services
                    </Link>

                    <Link
                        to="/contact"
                        className="menu-link"
                        onClick={hideMenu}
                    >
                        Contact
                    </Link>

                    <Link
                        to="/form"
                        className="menu-link bg-neutral-700 text-white font-semibold text-center mt-3 mx-3 hover:bg-neutral-900"
                        onClick={hideMenu}
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
