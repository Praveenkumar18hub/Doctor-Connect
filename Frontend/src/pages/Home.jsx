import React from 'react'
import Hero from "../components/Hero"
import Biography from "../components/Biography"
import Departments from "../components/Departments"
import MessageForm from "../components/MessageForm"

const Home = () => {
  return  <>

  <Hero title={" Doctor-Connect | A trusted source for Health care "} imageUrl={"./hero1.png"}/>
  <Biography imageUrl={"/about.png"}/>
  <Departments/>
  <MessageForm/>
  </>
}

export default Home
