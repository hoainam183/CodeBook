import React from 'react'
import AllRoutes from './routes/AllRoutes'
import Header from './components/Layouts/Header'
import {Footer} from './components/Layouts/Footer'
// import { Footer, Header } from './components'
export default function App() {
  return (
    <div className='App dark:bg-slate-800'>
      <Header></Header>
      <AllRoutes/>
      <Footer></Footer>
    </div>
  )
}