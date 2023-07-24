import React from 'react'

const Button = ({styles}) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] ${styles} text-primary/80 outline-none rounded-2xl`} >
      Get Started
    </button>
  )
}

export default Button