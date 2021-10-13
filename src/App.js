import { CssBaseline } from '@mui/material'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Menu openMenu={openMenu} />
        <Switch>
          <Route exact path='/'>
            <Home />
            <Footer />
          </Route>
          <Route exact path='/about'>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
