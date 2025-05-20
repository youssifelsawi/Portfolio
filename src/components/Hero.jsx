import React from "react";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 py-12 bg-#0a1930">
      <div className="info">
        <h1 className="text-4xl font-bold mb-2 text-[#64C0B6]">Hi, I’m Youssif Elsawi</h1>
        <h2 className="text-xl mb-2 text-[#9AA6C1]">React Web Developer</h2>
        <p className="text-gray-600 mb-6 text-[#479691]">Building Interactive and modern UIs</p>
        <Link to="projects" smooth={true} duration={1000}><button className="px-6 py-2 bg-[#479691] text-white rounded-lg hover:cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-xl" >View My Work</button></Link>
      </div>
    </section>
  );
};

export default Hero;
