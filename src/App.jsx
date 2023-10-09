import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Component/NavigationBar";
import Header from "./Component/Header";
import Portfolio from "./Component/Portfolio";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { useEffect, useState } from "react";
import LoadingSpinner from "./Component/LoadingSpinner";
import Blogs from "./Component/Blogs";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <NavigationBar />
          <Header />
          <Skills />
          <Portfolio />
          <Blogs />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
