// Import the required things here:
import React from "react";
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio"


// Here is where the main function will run on the page:

const App = () => {
  // Always return something:
  return (
    <>
    <Header />
    <Intro />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    
    </>
  )
}

// Export always at the end:

export default App;
