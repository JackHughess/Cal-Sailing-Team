import { About } from './components/About'
import { Events } from './components/Events'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Join } from './components/Join'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Join />
      </main>
      <Footer />
    </>
  )
}

export default App
