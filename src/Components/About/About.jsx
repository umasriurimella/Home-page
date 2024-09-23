import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h1>ABOUT</h1>
        <h5>Food is An Important Part of a Balanced Diet</h5>
        <p>From the early days of Indian history,vegetarianism has played a pivotal role in the development of
          different cusinies across the country,and veggie is here to redefine and bring back the scinitillating
          flavours of our recipes that have been passed on through generations.
        </p>
        <p>
          Our team,brings to you an experience that everyone will remember for its flavours,
          traditional recipies and ever so friendly hospitality,all three being the culture of every household in our society.
        </p>
        
      </div>
    </div>
  )
}

export default About
