import MainBar from "./components/MainBar/MainBar"
import Marquee from "./components/Marquee/Marquee"
import Navbar from "./components/NavBar/Navbar"

function App() {
  return (
    <>
    <div className="bg-customYellow">
      <Marquee />
      <MainBar />
      <Navbar />
      </div>
    </>
  )
}

export default App
