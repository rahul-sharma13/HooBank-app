import { useState } from 'react';
import { logo, close, menu } from '../assets'; //imported from index.js in assets
import { navLinks} from '../constants';
import {motion} from 'framer-motion';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 items-center justify-between navbar" >
      <img src={logo} alt="hooBank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1" >
        {navLinks.map((nav, index) => (                               //when we want to instantly return something parenthesis used instead of curly braces
        //map function needs a unique key for each.
          <motion.li whileHover={{scale:1.3, transition:{duration:0.5}}} key={nav.id}  className={`hover:text-secondary font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10' }`} >  
            <a href={`#${nav.id}`}>       {/* used to concatenate # and home/feature in one string */}
              {nav.title}
            </a>
          </motion.li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
         src={toggle ? close : menu} 
         alt="menu"
         className=" w-[28px] h-[28px] object-contain"
         onClick={()=> setToggle((prev) => !prev)}    //cannot directly write !toggle in reactJS. If we want to update the state using previuos state, we need a callback function for it . Here we setToggle to be equal to.
        />
        
        <div className={`${toggle? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1" >
          {navLinks.map((nav, index) => (                             
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4' }`} >  
            <a href={`#${nav.id}`}>       
              {nav.title}
            </a>
          </li>
        ))}
          </ul>
        </div>
      </div>
      

    </nav>
  )
}

export default Navbar