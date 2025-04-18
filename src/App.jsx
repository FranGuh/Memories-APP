import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { CustomCalendar } from "./components";
import './components/ThemeConfig/Themes.css'; 
import './App.css'
import { ThemeProvider } from './components/ThemeConfig/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Memories from './components/Memories/Memories';
import Notification from './components/Notification/Notification';
import LandingPage from './components/LandingPage/LandingPage';
import { Analytics } from "@vercel/analytics/react"
import AdvancedThemeCustomizer from './components/ThemeConfig/ThemeSelector/AdvancedThemeCustomizar';
import BlogLiterature from './components/MyHistoryUser/BlogLiterature';
import Chat from './components/Chat/Chat';
import { SpeedInsights } from "@vercel/speed-insights/react"


function App() {
  return (
    <Router>
      <ThemeProvider>
      <div className='app'>
        <Navbar />
          {/* <div className="p-4">
                <h1 className="text-xl font-bold">Memories</h1>
                <CustomCalendar />
          </div> */}
            <Routes>
              <Route path='/' element={<Memories />} />
              <Route path='/notifications' element={<Notification />} />
              <Route path='/landing' element={<LandingPage />} />
              <Route path='/config' element={<AdvancedThemeCustomizer />} />
              <Route path='/page' element={<BlogLiterature />} />
              <Route path='/chat' element={<Chat />} />
              {/* Redirige cualquier otra ruta a / */}
              <Route path="*" element={<Navigate to="/landing" replace />} />
            </Routes>
          

          <p className="footer">
            Coded by @Fran
          </p>

      </div>
      <Analytics />
      <SpeedInsights />
      </ThemeProvider>
    </Router>
  )
}

export default App
