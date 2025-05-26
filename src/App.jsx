import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Header from "./components/Header";

function App() {
  return (
    <>
    <div className="container mx-auto max-w-[1200px]">
        <Header />
    </div>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Home />}/>
        <Route path="/about" element={<Home />}/>
        <Route path="/contact" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
