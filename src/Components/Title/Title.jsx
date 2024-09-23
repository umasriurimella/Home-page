import React from 'react'
import './Title.css'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';


const Title = ({subTitle, title}) => {
  return (
    <motion.div 
    variants={fadeIn("down",0.9)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false,amount:0.7}}
    className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </motion.div>
  )
}

export default Title
