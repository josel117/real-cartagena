import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar        from './components/Navbar'
import Footer        from './components/Footer'
import Hero          from './components/Hero'
import SobreNosotros from './components/SobreNosotros'
import Resultados    from './components/Resultados'
import Plantilla     from './components/Plantilla'
import Tienda        from './components/Tienda'
import Comunicados   from './components/Comunicados'
import Sponsors      from './components/Sponsors'

// Páginas nuevas
import PlantillaPage from './pages/PlantillaPage'
import HistoriaPage  from './pages/HistoriaPage'

function StripeDivider() {
  return <div className="stripe-divider" />
}

function HomePage() {
  return (
    <>
      <Hero />
      <StripeDivider />
      <SobreNosotros />
      <StripeDivider />
      <Resultados />
      <StripeDivider />
      <Plantilla />
      <StripeDivider />
      <Tienda />
      <StripeDivider />
      <Comunicados />
      <Sponsors />
    </>
  )
}

function AppInner() {
  const { dark } = useTheme()
  return (
    <div className={`min-h-screen ${dark ? 'bg-dark text-white' : 'bg-cream text-gray-900'}`}>
      <Navbar />
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/plantilla" element={<PlantillaPage />} />
        <Route path="/historia"  element={<HistoriaPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppInner />
      </ThemeProvider>
    </BrowserRouter>
  )
}