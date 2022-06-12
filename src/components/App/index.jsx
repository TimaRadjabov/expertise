import { Header } from "../Header";
import { SliderTwo } from "../SliderTwo";
import { Footer } from "../Footer";
import { Routes, Route } from "react-router-dom";
import { Expertise } from "../../pages/Expertise";
import { AboutUs } from "../../pages/AboutUs";
import { News } from "../../pages/News";
import { Estimation } from "../../pages/Estimation";
import { Supporting } from "../../pages/Supporting";
import { Contacts } from "../../pages/Contacts";

import "./AppStyles.scss";

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<SliderTwo />} />
        <Route path="expertise" element={<Expertise />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="news" element={<News />} />
        <Route path="supporting" element={<Supporting />} />
        <Route path="estimation" element={<Estimation />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default App;
