import { useState } from "react";
import Link from "../Link/Link";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/home', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/blog', name: 'Blog' },
        { id: 5, path: '/contact', name: 'Contact' }
      ]

    return (
        <nav>
            <div className="md:hidden" onClick={()=> setOpen(!open)}>
                {
                    open === true ? 
                    <TfiClose className="text-4xl md:hidden"></TfiClose> 
                    : 
                    <TfiAlignJustify className="text-4xl md:hidden"></TfiAlignJustify>
                }
            </div>
            
            
            <ul className={`md:flex duration-1000 absolute ${open ? 'top-16' : '-top-60'} bg-`}>
                {
                    routes.map( route => <Link key={route.id} route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default NavBar;