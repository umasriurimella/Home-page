import React from 'react'
import './Hero.css'
import white_arrow from '../../assets/white-arrow.png'
import Bike from '../../assets/Bike.json'
import Lottie from "lottie-react"

const Hero = ({setPlayState}) => {
  return (
    
    <div className='hero'>
      <div className="hero-left">
      <h1>Your Favourite Food Delivered Hot & Fresh</h1><br/>
        <p>A Landmark for all things vegetarian,traditional and delicious.</p><br/><br/>     
       <button className='btn'>Order Now <img src={white_arrow} alt="" /></button> 
      </div>
      <div className="hero-right">
      <div style={{width:"100%"}}>
      <Lottie animationData={Bike}/></div>
        
        
      </div>
    </div>
  )
}

export default Hero
// import React from 'react'
// import './Hero.css'
//

// const Hero = () => {
//   return (
//     <div className='hero container'>
//       <div className="hero-text">
//         <h1>Your Favourite Food Delivered Hot & Fresh</h1>
//         <p>A Landmark for all things vegetarian,traditional and delicious.</p>      
//          <button className='btn'>Order Now <img src={white_arrow} alt="" /></button>
//       </div>
//     </div>
//   )
// }

// export default Hero
