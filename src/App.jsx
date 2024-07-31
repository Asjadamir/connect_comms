import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/About";
import SubmitForm from "./pages/SubmitForm";
import Footer from "./components/Footer";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/form" element={<SubmitForm />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
