import React, { useState } from 'react';
import Link from './navbar/Link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {

    const navigationData  = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About Us",
          path: "/about"
        },
        {
          id: 3,
          name: "Services",
          path: "/services"
        },
        {
          id: 4,
          name: "Portfolio",
          path: "/portfolio"
        },
        {
          id: 5,
          name: "Contact",
          path: "/contact"
        }
      ];
      const links = navigationData.map(rout =><Link key={rout.id} route={rout}></Link> )
      
      const [open, setOpen]=useState(false)
    return (
      <div>
        <nav className='flex justify-between mx-8 mt-5'>
            <span className='flex items-center 'onClick={()=> setOpen(!open)} >
                 {open?
                    <X className='lg:hidden'></X>:
                    <Menu className='lg:hidden'>
                    </Menu>}
                 
            
            <ul className={`lg:hidden ml-0 absolute  text-white
             ${open ? 'top-16': '-top-40'}
             duration-500`}>
                {links}
            </ul>
            <h1 className='text-2xl ml-8'>Navbar </h1>
            </span>
           <ul className='lg:flex hidden'>
           {
               links 
            }
           </ul>
         
            <button>Sing up</button>
        </nav>
  
      </div>
     

    );
};

export default Navbar;