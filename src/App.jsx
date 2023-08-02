import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Component/NavigationBar'
import Header from './Component/Header';
import Portfolio from './Component/Portfolio';
import Skills from './Component/Skills';
import Contact from './Component/Contact';
import Footer from './Component/Footer';


function App() {

  return (
    <>
      <NavigationBar />
      <Header />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
