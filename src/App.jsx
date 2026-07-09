import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Portfolio from "./mainPage/portfolio/Portfolio.jsx";
import './utils/language/i18n.js'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
        <Analytics />
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio />}></Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
