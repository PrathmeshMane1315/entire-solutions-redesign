import { useEffect } from 'react'
import Navbar from './components/Navbar.tsx'
import HomePage from './pages/HomePage.tsx'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App