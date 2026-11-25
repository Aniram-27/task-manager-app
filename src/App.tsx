// src/App.tsx
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header.tsx'
import AboutSection from './components/AboutSection.tsx'
import Footer from './components/Footer.tsx'
import WelcomeSection from './components/WelcomeSection.tsx'
import entries from './data/entries.ts'
import EntryCard from './components/EntryCard.tsx'
import NewEntryForm from './components/NewEntryForm.tsx'

const sortedEntries = [...entries].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

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
        <h2>All Entries ({sortedEntries.length})</h2>
        {sortedEntries.map((e) => (
          <EntryCard key={e.id} entry={e} />
        ))}
      </main>
      <Footer />
    </>
  )
}

function NewEntry(){
  return(
<>
  <Header />
    <main>
    <h2>New Entry</h2>
  <NewEntryForm />
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
      <Route path="/entries/new" element={<NewEntry />} />
    </Routes>
  )
}