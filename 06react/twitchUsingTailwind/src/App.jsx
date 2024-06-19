import NavBar from "./components/NavBar"

export default function App() {
  return (
    <main className="w-full min-h-screen p-0 grid grid-cols-[20%_1fr] grid-rows-[3rem_1fr]">
      <NavBar />
      <aside className="col-start-1 cold-end-2 row-start-2 row-end-3">Recomendados</aside> {/*Canales recomendados*/}
      <section className="col-start-2 col-end-3 row-start-2 row-end-3">Content</section>
    </main>
  )
}

//?export default App otra forma de exportar 

