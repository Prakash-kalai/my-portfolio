import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Education from '../compounds/Education'
import Home from '../compounds/Home'
import Contact from '../compounds/Contact'
import Projects from '../compounds/Projects'
import About from '../compounds/AboutMe'
import { FaXTwitter, FaGithub, FaFacebook } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import Skills from '../compounds/Skills'

const Routeing = () => {
  return (
    <div >
        <Routes>
            <Route path="/" element={<Home/>}/> || <Route path="/home" element={<Home/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/contacts' element={<Contact/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/aboutme' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
        </Routes>        
    </div>
  )
}

export default Routeing