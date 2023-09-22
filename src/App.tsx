import { useState } from 'react'
import MainPage from './pages/MainPage'
import { Route, Routes } from 'react-router-dom'
import WritePage from './pages/WritePage'
import DetailPage from './pages/DetailPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import NavigationBar from './components/NavigationBar'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
      <NavigationBar />
    </div>
  )
}

export default App
