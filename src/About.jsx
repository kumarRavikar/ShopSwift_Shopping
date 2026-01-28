import React from 'react'
import about from "../src/assets/Photo/about.png"
import HomePage from './components/HomePage'
import Services from './components/Services'
import Trusted from './components/Trusted'
import Footer from "../src/components/Footer"
export const About = () => {
  const pageDetails = {
    name : "About Our Company",
    img : about,
    desc:'At ShopSwift, we believe shopping should be simple, reliable, and enjoyable.Our platform is built to connect you with high-quality products at affordable prices,while delivering a smooth and secure shopping experience.From product discovery to checkout, every feature is designed with the customer in mind.'
  }
  return(
    <>
     <HomePage pageDetails={pageDetails}/>
     <Services/>
     <Trusted/>
     </>
    )
}
    