// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header.tsx'
import AboutSection from './components/AboutSection.tsx'
import Footer from './components/Footer.tsx'
import WelcomeSection from './components/WelcomeSection.tsx'
import entries from './data/entries.ts'
import EntryCard from './components/EntryCard.tsx'

function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <WelcomeSection />
        </section>
      </main>
      <Footer />
    </>
  )
}

function About() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Back to Home</Link>
        </nav>
      </header>
      <main>
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}

function Entries() {
  return (
    <>
      <Header />
      <main>
        <h2>Entries</h2>
        {entries.map((e) => (
          <EntryCard key={e.id} entry={e} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/entries" element={<Entries />} />
    </Routes>
  )
}