// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skill } from "./components/Skill"
import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { EmailLink } from './components/SendEmail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill/>
      <Projects />
      <EmailLink/>
      <Footer />
    </div>
  );
}

export default App;