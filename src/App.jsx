import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Component/NavigationBar'
import Header from './Component/Header';
import Portfolio from './Component/Portfolio';
import Skills from './Component/Skills';


function App() {

  return (
    <>
      <NavigationBar />
      <Header />
      <Skills />
      <Portfolio />
    </>
  )
}

export default App
