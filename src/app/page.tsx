import { Hero, Tabs } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="container">
        <Tabs />
      </div>
    </main>
  )
}
