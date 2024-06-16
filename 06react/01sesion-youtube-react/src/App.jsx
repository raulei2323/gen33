import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import Content from "./components/Content"


export default function App () {
  return(
    // <main id="main-layout">
   <main className=" w-full min-h-screen p-4 grid grid-cols-[20%_1fr] grid-rows-[3.2rem_1fr]">
      <NavBar />
      <Menu />
      <Content />
    </main>
  )
}



