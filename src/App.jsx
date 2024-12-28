import React from 'react'
import Home from './component/Home'
import { BrowserRouter, NavLink } from "react-router-dom";
import FactSheet from './component/FactSheet';
import Newsroom from './component/Newsroom';
import TeamBlog from './component/TeamBlog';
import Media from './component/Media';
import Awards from './component/Awards';

const App = () => {
  return (
    <div className='overflow-x-hidden ' >
   <BrowserRouter>
      <Home />
      <FactSheet />
      <Newsroom />
      <TeamBlog />
      <Media />
      <Awards />
    </BrowserRouter>
    </div>
  )
}

export default App
