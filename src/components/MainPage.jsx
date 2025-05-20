import React from 'react'
import { Element } from 'react-scroll';

import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

const MainPage = () => {
  return (
    <>
    <Element name="hero"><Hero /></Element>
    <Element name="about"><About /></Element>
    <Element name="projects"><Projects /></Element>
    <Element name="skills"><Skills /></Element>
    <Element name="contact"><Contact /></Element>
    <Element name="footer"><Footer /></Element>
    </>
  )
}

export default MainPage