import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepagee from './Homepagee'
import Baseforlilapps from './Baseforlilapps'

import Spaone from './spaS/Spaone'
import Spatwo from './spaS/Spatwo'

import Typewriter from './spaS/TypeWriter'
import Hangman from './spaS/Hangman'
import Whackamole from './spaS/Whackamole'
import Reactiontime from './spaS/Reactiontime'
import Cooltimer from './spaS/Cooltimer'
import Bubblesblowpop from './spaS/Bubblesblowpop'
import AnalogClock from './spaS/Analogclock'
import Randompalette from './spaS/Randompalette'
import Typespeed from './spaS/Typespeed'
import Mappins from './spaS/Mappins'

import Notfound from './Notfound'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepagee />} />

        <Route path='/littleapps' element={<Baseforlilapps />} >
          <Route path='one' element={<Spaone />} />
          <Route path='two' element={<Spatwo />} />

          <Route path='typewriter' element={<Typewriter />} />
          <Route path='hangman' element={<Hangman />} />
          <Route path='whackamole' element={<Whackamole />} />
          <Route path='reactiontime' element={<Reactiontime />} />
          <Route path='typespeed' element={<Typespeed />} />
          <Route path='randompalette' element={<Randompalette />} />
          <Route path='analogclock' element={<AnalogClock />} />
          <Route path='cooltimer' element={<Cooltimer />} />
          <Route path='bubbles' element={<Bubblesblowpop />} />
          <Route path='mappins' element={<Mappins />} />
        </Route>

        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App