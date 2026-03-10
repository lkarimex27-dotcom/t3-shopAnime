//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import{ HashRouter, Routes, Route } from "react-router-dom"
import Header from "./features/layout/components/Header"
import Content from "./features/layout/components/Content"
import Footer from "./features/layout/components/Footer"

//components Auth
import {Myaccount} from "./features/auth/components/Myaccount"
import {Mybuys} from "./features/auth/components/Mybuys"
import {Myfavourites} from "./features/auth/components/Myfavourites"
//components view
import { Article } from "./features/view/components/Article"
import {Offers} from "./features/view/components/Offers"
//import '../src/shared/styles/index.css'

function App() {  
  return (
    <>
      <HashRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Content/>}></Route>
          <Route path="/article" element={<Article/>}></Route>
          <Route path="/offers" element={<Offers/>}></Route>
          <Route path="/myaccount" element={<Myaccount/>}></Route>
          <Route path="/mybuys" element={<Mybuys/>}></Route>
          <Route path="/myfavourites" element={<Myfavourites/>}></Route>
        
        </Routes>
        <Footer></Footer>
      </HashRouter>
    </>
  )
}

export default App
