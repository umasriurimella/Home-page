import React, { useRef } from 'react'
import {AiFillStar} from "react-icons/ai"
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <motion.div 
    variants={fadeIn("up",0.9)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false,amount:0.7}}
     className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Sri</h3>
                            <span>hyd</span>
                            <div className="testimonials-stars-container">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>
                        </div>
                    </div>
                    <p>The food was excelent and so was the service I had the vegitable salad which was awesome they were very conscientious workers the restaurant has a very nice
                        ambience.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Ram</h3>
                            <span>Hyd</span>
                            <div className="testimonials-stars-container">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>
                        </div>
                    </div>
                    <p>The food was very tastey.I recommend to visit this place and have tastey and healthy food.Everything we ordered was very delicious.</p>
                        </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Lilly</h3>
                            <span>Hyd</span>
                            <div className="testimonials-stars-container">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>
                        </div>
                    </div>
                    <p>The food was excelent and so was the service I had the vegitable salad which was awesome they were very conscientious workers the restaurant has a very nice
                    ambience</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Jhon</h3>
                            <span>Hyd</span>
                            <div className="testimonials-stars-container">
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                        </div>
                        </div>
                    </div>
                    <p>The food was very tastey.I recommend to visit this place and have tastey and healthy food.Everything we ordered was very delicious.</p>
                </div>
            </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default Testimonials
