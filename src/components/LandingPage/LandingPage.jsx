import React from 'react'
import MemoriesButton from '../MemoriesButton/MemoriesButton'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <>
     <section className='Page'>
     <img className="LandingPage__img" src="/LandingImg/happyCat.png" alt="" />
      <div className="LandingPage">
        
          <h1>Beutiful Landing Page</h1>
          <p>We build this template to help you create modern and beautiful marketing page</p>
          <div className="LandingPage__buttons">
              <MemoriesButton 
                  MemoriesButtomText="Login"
              />
              <MemoriesButton 
                  MemoriesButtomText="Sign Up"
              />
          </div>
          
      </div> 
     </section>
    </>
  )
}

export default LandingPage
