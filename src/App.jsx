import React from 'react'
import Home from './portfolio/Home.jsx'
import About from './portfolio/About.jsx'
import Empty from './portfolio/Empty.jsx'
import Contact from './portfolio/Contact'
import Project from './portfolio/Project'
import TableOfContent from './portfolio/TableOfContent.jsx'
const App = () => {
  return (
    <div>
      <Home />
      <About />      
      <Project />
      <Empty /> 
      <TableOfContent/>
      <Contact />
      
    </div>
  )
}

export default App