import React from "react"
import Welcome from "../components/Welcome/Welcome"
import AboutUs from "../components/AboutUs/AboutUs"
import Courses from "../components/Courses/Courses"
import Statistics from "../components/Statistics/Statistics"
import Footer from '../components/Footer/Footer'

export const Home = () => {
  return (
    <div>
      <Welcome/>
      <AboutUs/>
      <Courses/>
      <Statistics/>
      <Footer/>
    </div>
  )
}