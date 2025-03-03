import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import About from "./About";
import Calendar from "./Calendar";
import Shows from "./Shows";
import Merch from "./Merch";
import Home from "./Home";


const SiteRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/shows" element={<Shows />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default SiteRouter;