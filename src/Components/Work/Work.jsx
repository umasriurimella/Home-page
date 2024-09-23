import React from 'react'
import './Work.css'
import PickMeals from "../../assets/pick-meals-image.png";
import ChooseMeals from "../../assets/choose-image.png";
import DeliveryMeals from "../../assets/delivery-image.png";
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Select your favourites from a weekly menu of easy to follow reciepies",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Choose what you want from menu.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Got fresh food delivered straight to your door.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      
     
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <motion.div 
          variants={fadeIn("up",0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false,amount:0.7}}
           className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;