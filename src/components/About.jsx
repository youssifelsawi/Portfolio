import React from 'react'
import profileImg from '../assets/images/profile.jpg';

const About = () => {
  return (
    <section id="about" className="flex px-6 py-12 bg-#0a1930 text-center justify-center align-center max-sm:flex-col items-center">
        <img src={profileImg} className="w-44 h-44 rounded-full mr-8 max-sm:mr-0 mb-5"/>
        <div className="text">
        <h3 className="text-3xl font-semibold mb-2 text-[#64C0B6]">About Me</h3>
        <p className="text-xl max-w-xl mx-auto text-[#9AA6C1]">
          I am a web developer specializing in building fast, interactive, and accessible websites and applications using React.
          I have a passion for learning new technologies and improving my coding skills.
        </p>
        </div>
      </section>
  )
}

export default About