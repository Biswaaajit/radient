import MainBody from "./Mainbody/MainBody";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-slate-200 h-fit">
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
