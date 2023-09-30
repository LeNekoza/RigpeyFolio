import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Formvallid() {
  return (
  <div>
    <Nav />
    <div className="flex justify-center mt-20">
      <div className="select-none text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
      Failed to sent
      </div>
      </div>
    <Footer />
  </div>
  )
}