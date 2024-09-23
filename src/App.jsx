import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
      <div>
     <Navbar/>
     <Hero/>
    
     
     
     <div className="container">
        <About setPlayState={setPlayState}/>
        <Title subTitle='Work' title='How it Works'/>
        <Work/>
        <Title subTitle='Testimonials' title='What They are Saying'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
    
  )
}

export default App