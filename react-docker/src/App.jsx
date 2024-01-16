import Navbar from "./components/Navbar";
import Upload from "./components/Upload";

export default function App() {
  return (
    <section>
      <Navbar/>
      <div className="my-5" >
        <Upload/>
      </div>
    </section>
  )
}