import Header from "@/components/header"
import Hero from "@/components/hero"
import SearchSection from "@/components/search-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      <Hero />
      <SearchSection />
    </main>
  )
}
