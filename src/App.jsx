import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import React, { useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HowWeWork from "./pages/HowWeWork";
import Footer from "./components/Footer";


const pages = [
    { endpoint: "/", title: "Home", component: <Home /> },
    { endpoint: "/about-us", title: "About Us", component: <AboutUs /> },
]

const LoadPageContent = () => {
    const location = useLocation(); // Using useLocation hook
    useEffect(() => {
        const sections = document.querySelectorAll(".section");

        const fadeInOptions = {
            threshold: 0.2,
        };

        const fadeInObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    entry.target.classList.remove("fade-out"); // Remove fade-out class
                    observer.unobserve(entry.target);
                } else {
                    entry.target.classList.remove("fade-in");
                    entry.target.classList.add("fade-out"); // Add fade-out class
                }
            });
        }, fadeInOptions);

        sections.forEach((section) => {
            fadeInObserver.observe(section);
        });
    }, [location]);
}

function App() {


    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    const isMobile = width <= 768;
    return (
        <Router>
            <NavBar pages={pages} />
            <LoadPageContent />
            <Routes>
                {pages.map((each) => (
                    <Route path={each.endpoint} element={each.component} isMobile={isMobile} />
                ))}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;