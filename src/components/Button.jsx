import React from 'react';
import { motion } from 'framer-motion';

const Button = ({styles}) => {
  return (
    <motion.button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] ${styles} text-primary/80 outline-none rounded-2xl while `} whileHover={{scale:1.2}} whileTap={{scale:0.8}}  >
      Get Started
    </motion.button>
  )
}

export default Button