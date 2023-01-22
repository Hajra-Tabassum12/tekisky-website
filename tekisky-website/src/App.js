
import Index from "./views/INDEX"
import Nav from "./components/Navigation/Nav";
import About from "./components/about/About";
import Body from "./components/Body/Body";
import Cont from "./components/contact/cont";
import Footer from "./components/Footer/Footer";
import Image from "./components/images/image";
import Mern from "./components/mern/Mern";
import Service from "./components/service/service";
import Tech from "./components/technologies/Tech";

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Index />
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/about" element={<div><Image /></div>} />
          <Route path="/service" element={<Service />} />
          <Route path="/technology" element={<div>  <Image /></div>} />
          <Route path="/contact" element={<div><About />  </div>} />
          <Route path="/batches" element={<Footer />} />
        </Route>
      </Routes>
    </div>



  );
}

export default App;
